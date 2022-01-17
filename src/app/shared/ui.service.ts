import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subject} from "rxjs";

@Injectable()
export class UiService {

  constructor(private snackBar: MatSnackBar) {
  }

  isLoading = new Subject<boolean>();

  successNotification(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 8000,
      panelClass: ["success-notification"]
    })
  }

  errorNotification(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 8000,
      panelClass: ["error-notification"]
    })
  }
}
