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
}
