import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'quantity-entry-form',
    templateUrl: './quantityEntryForm.component.html',
    styleUrls: ['./quantityEntryForm.component.css']
})
export class QuantityEntryForm {
    @Input() label: string;
    @Input() quantity: number;
    @Output() quantityChange = new EventEmitter<number>();
    @Output() updateCoinValues = new EventEmitter<any>();

    calcCoinTotal() {
        this.quantityChange.emit(this.quantity);
        this.updateCoinValues.emit();
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
