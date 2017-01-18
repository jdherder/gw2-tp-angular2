import { Component, Input } from '@angular/core';

@Component({
    selector: 'coin-entry-form',
    templateUrl: './coinEntryForm.component.html',
    styleUrls: ['./coinEntryForm.component.css']
})
export class CoinEntryForm {
    @Input() label: string;
    @Input() coins: number;

    gold: number = 0;
    silver: number = 0;
    copper: number = 0;

    calcCoinTotal() {
        const total = this.gold * 10000 + this.silver * 100 + this.copper * 1;
        this.coins = total || 0;
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
