import { Injectable } from '@angular/core';
import { MAccount } from 'src/model/MAccount';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  public accounts: Array<MAccount> = [];
  
  getAccounts() {
    this.generaMockCuentas();
    return this.accounts;
  }

  constructor() { }


  generaMockCuentas() {
    let arrCuenta = ['Income', 'Expense', 'Assets', 'Savings'];
    let icon = ['income', 'expense', 'assets', 'savings'];
    for (let i = 0; i < 5; i++ ) {
      const cuenta = new MAccount();
      cuenta.name = arrCuenta[i];
      cuenta.description = 'Total ';
      cuenta.total = i * 10 + 10000;
      cuenta.icon = icon[i];

      this.accounts.push(cuenta);
    }
  }




}
