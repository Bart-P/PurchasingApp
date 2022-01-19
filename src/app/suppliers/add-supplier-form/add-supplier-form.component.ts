import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Lang} from "../../model/lang.model";
import {Supplier} from "../../model/supplier.model";
import {SuppliersService} from "../suppliers.service";

@Component({
  selector: 'app-add-supplier-form',
  templateUrl: './add-supplier-form.component.html',
  styleUrls: ['./add-supplier-form.component.css']
})
export class AddSupplierFormComponent implements OnInit {

  languages = Object.keys(Lang);
  addSupplierForm = new FormGroup({
    companyName: new FormControl(''),
    companyEmail: new FormControl(''),
    companyLang: new FormControl(Lang.EN),
    companyWeb: new FormControl(''),
    companyPhone: new FormControl(''),
  });

  constructor(private suppliersService: SuppliersService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValues = this.addSupplierForm.getRawValue();
    let supplier: Supplier = {
      companyName: formValues.companyName,
      companyEmail: formValues.companyEmail,
      companyLanguage: formValues.companyLang,
      companyWeb: formValues.companyWeb,
      companyPhone: formValues.companyPhone,
      created: new Date(),
    }

    this.suppliersService.addSupplierToDb(supplier);
    this.resetAddSupplierForm();
  }

  private resetAddSupplierForm() {
    this.addSupplierForm = new FormGroup({
      companyName: new FormControl(''),
      companyEmail: new FormControl(''),
      companyLang: new FormControl(Lang.EN),
      companyWeb: new FormControl(''),
      companyPhone: new FormControl(''),
    });
  }

}
