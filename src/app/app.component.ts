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
    coinProfit: 0,
    quantity: 1
  };

  updateCoinValues() {
    const coinBuyPrice: number = this.state.coinBuyPrice * this.state.quantity;
    const coinListPrice: number = this.state.coinListPrice * this.state.quantity;

    let coinFeeListing: number = Math.round(coinListPrice * 0.05) || 1;
    let coinFeeExchange: number = Math.round(coinListPrice * 0.10) || 1;
    let coinNet: number = coinListPrice - coinFeeListing - coinFeeExchange;
    let coinProfit: number = coinNet - coinBuyPrice;

    if (coinListPrice <= 0) {
      coinFeeListing = 0;
      coinFeeExchange = 0;
      coinNet = 0;
      coinProfit = 0;
    }

    this.state.coinFeeListing = coinFeeListing;
    this.state.coinFeeExchange = coinFeeExchange;
    this.state.coinNet = coinNet;
    this.state.coinProfit = coinProfit;
  }
}
