import { Component, Input } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
    selector: 'coin-display',
    templateUrl: './coinDisplay.component.html',
    styleUrls: ['./coinDisplay.component.css']
})
export class CoinDisplay {
    @Input() label: string;
    @Input() coins: number;

    gold: number = 0;
    silver: number = 0;
    copper: number = 0;
    sign: string = '';

    ngOnChanges(changes: any) {
        let total = Math.abs(this.coins);

        this.gold = Math.floor(total / AppConstants.goldMultiplier);
        total -= (this.gold * AppConstants.goldMultiplier);

        this.silver = Math.floor(total / AppConstants.silverMultiplier);
        total -= (this.silver * AppConstants.silverMultiplier);

        this.copper = total;

        this.sign = this.coins >= 0 ? '' : '-';
    }
}
