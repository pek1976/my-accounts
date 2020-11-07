import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'misCuentasApp';
  test = [{"total": 900, "name":"test", "description":"descript test..."}];

}
