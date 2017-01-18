import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state: any = {
    coinBuyPrice: 0,
    coinListPrice: 0,
    coinFeeListing: 0,
    coinFeeExchange: 0,
    coinNet: 0,
    coinProfit: 0
  };
}
