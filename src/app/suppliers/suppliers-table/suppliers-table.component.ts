import {Component, OnDestroy, OnInit} from '@angular/core';
import {SuppliersService} from "../suppliers.service";
import {Subscription} from "rxjs";
import {Supplier} from "../../model/supplier.model";
import {MatDialog} from "@angular/material/dialog";
import {EditSupplierDialogComponent} from "../edit-supplier-dialog/edit-supplier-dialog.component";
import {UiService} from "../../shared/ui.service";

@Component({
  selector: 'app-suppliers-table',
  templateUrl: './suppliers-table.component.html',
  styleUrls: ['./suppliers-table.component.css']
})
export class SuppliersTableComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  suppliersSubs: Subscription = new Subscription();
  isLoadingSub: Subscription = new Subscription();
  isLoading$?: boolean;
  suppliers$: Supplier[] = [];
  displayedColumns: string[] = ['name', 'email', 'web', 'phone', 'created', 'lastModified', 'tableControls'];

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
    this.suppliersSubs = this.suppliersService.fetchAllSuppliers().subscribe(suppliers => {
      this.suppliers$ = suppliers;
      this.subs.push(this.suppliersSubs);
      this.uiService.isLoading.next(false);
    });

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
