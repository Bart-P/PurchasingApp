import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Supplier} from "../../model/supplier.model";
import {FormControl, FormGroup} from "@angular/forms";
import {Lang} from "../../model/lang.model";

@Component({
  selector: 'app-edit-supplier-dialog',
  templateUrl: './edit-supplier-dialog.component.html',
  styleUrls: ['./edit-supplier-dialog.component.css']
})
export class EditSupplierDialogComponent {
  editSupplierForm = new FormGroup({
    id: new FormControl(this.data.id),
    companyName: new FormControl(this.data.companyName),
    companyEmail: new FormControl(this.data.companyEmail),
    companyLang: new FormControl(this.data.companyLanguage),
    companyWeb: new FormControl(this.data.companyWeb),
    companyPhone: new FormControl(this.data.companyPhone),
  });
  languages = Object.keys(Lang);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Supplier) {
  }

  onSubmit() {

  }
}
