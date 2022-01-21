import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SuppliersService} from "../suppliers.service";
import {Subscription} from "rxjs";
import {Supplier} from "../../model/supplier.model";
import {MatDialog} from "@angular/material/dialog";
import {EditSupplierDialogComponent} from "../edit-supplier-dialog/edit-supplier-dialog.component";
import {UiService} from "../../shared/ui.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-suppliers-table',
  templateUrl: './suppliers-table.component.html',
  styleUrls: ['./suppliers-table.component.css']
})
export class SuppliersTableComponent implements OnInit, OnDestroy, AfterViewInit {

  private subs: Subscription[] = [];
  suppliersSubs: Subscription = new Subscription();
  isLoadingSub: Subscription = new Subscription();
  isLoading$?: boolean;

  displayedColumns: string[] = ['companyName', 'companyEmail', 'companyWeb', 'companyPhone', 'created', 'lastModified', 'tableControls'];
  dataSource = new MatTableDataSource<Supplier>();

  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  constructor(
    private suppliersService: SuppliersService,
    private dialog: MatDialog,
    private uiService: UiService,
  ) {
  }

  ngOnInit(): void {
    this.isLoadingSub = this.uiService.isLoading.subscribe(bool => {
      this.isLoading$ = bool;
    });
    this.subs.push(this.isLoadingSub);

    this.uiService.isLoading.next(true);
    this.suppliersSubs = this.suppliersService
      .fetchAllSuppliers()
      .subscribe((suppliers: Supplier[]) => {
        this.dataSource.data = suppliers;
        this.subs.push(this.suppliersSubs);
        this.uiService.isLoading.next(false);
      });

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;
    console.log(this.matSort, this.matPaginator);
  }

  openEditDialog(supplier: Supplier) {
    this.dialog.open(EditSupplierDialogComponent, {
      data: {
        ...supplier,
      },
      width: "70%",
      maxWidth: "800px",
      minWidth: "400px",
      height: "580px",
    });

  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }

}
