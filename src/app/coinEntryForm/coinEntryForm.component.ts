import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
    selector: 'coin-entry-form',
    templateUrl: './coinEntryForm.component.html',
    styleUrls: ['./coinEntryForm.component.css']
})
export class CoinEntryForm {
    @Input() label: string;
    @Input() coins: number;
    @Output() coinsChange = new EventEmitter<number>();

    gold: number = 0;
    silver: number = 0;
    copper: number = 0;

    calcCoinTotal() {
        this.coins = this.gold * AppConstants.goldMultiplier + this.silver * AppConstants.silverMultiplier + this.copper * AppConstants.copperMultiplier;
        this.coinsChange.emit(this.coins);
    }

    checkNumericInput(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    selectAllContent(event) {
        event.target.select();
    }
}
