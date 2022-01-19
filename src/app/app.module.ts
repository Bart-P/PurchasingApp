import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import localeDe from "@angular/common/locales/de"
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from './navbar/navbar.component';
import {SuppliersComponent} from './suppliers/suppliers.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {AddSupplierFormComponent} from './suppliers/add-supplier-form/add-supplier-form.component';
import {SuppliersTableComponent} from './suppliers/suppliers-table/suppliers-table.component';
import {
  AddSuppliersTagsComponent
} from './suppliers/add-suppliers-tags/add-suppliers-tags.component';
import {
  AddSuppliersCategoriesComponent
} from './suppliers/add-suppliers-categories/add-suppliers-categories.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {SuppliersService} from "./suppliers/suppliers.service";
import {UiService} from "./shared/ui.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {
  EditSupplierDialogComponent
} from './suppliers/edit-supplier-dialog/edit-supplier-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

registerLocaleData(localeDe, "de")

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SuppliersComponent,
    AddSupplierFormComponent,
    SuppliersTableComponent,
    AddSuppliersTagsComponent,
    AddSuppliersCategoriesComponent,
    EditSupplierDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [SuppliersService, UiService,],
  bootstrap: [AppComponent]
})
export class AppModule {
}
