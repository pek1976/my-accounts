import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'misCuentasApp';

  totalIncome = 0;
  totalExpeses = 0;
  totalAssets = 0;
  totalSavings = 0;
  
  account_items: MAccount[];

  constructor(private dataService: DataService){
  }

  test = [{"total": 900, "name":"test", "description":"descript test..."}];

  
  ngOnInit() {
    // console.log('this.account_items', this.account_items);
    this.account_items = this.dataService.getAccounts();
  }

}
