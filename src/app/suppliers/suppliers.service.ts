import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Supplier} from "../model/supplier.model";
import {UiService} from "../shared/ui.service";
import {map, Observable} from "rxjs";

@Injectable()
export class SuppliersService {

  constructor(private db: AngularFirestore, private uiService: UiService) {
  }

  addSupplierToDb(supplier: Supplier) {
    this.db.collection<Supplier>('suppliers')
      .add(supplier)
      .then(docRef => this.uiService.successNotification('A new Supplier has been created! ID: ' + docRef.id))
      .catch(err => this.uiService.errorNotification('Supplier could not be saved. Please try' +
        ' again later.. Error: ' + err));
  }

  fetchAllSuppliers(): Observable<Supplier[]> {
    let suppliersCollection = this.db.collection<Supplier>('suppliers');
    return suppliersCollection
      .snapshotChanges()
      .pipe(
        map(suppliers => suppliers.map(supplier => {
          const data = supplier.payload.doc.data();
          const id = supplier.payload.doc.id;
          return {id, ...data} as Supplier;
        }))
      );
  }

}
