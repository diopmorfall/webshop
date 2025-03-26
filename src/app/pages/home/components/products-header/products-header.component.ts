import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-products-header',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatIconModule],
    templateUrl: './products-header.component.html',
    styleUrl: './products-header.component.css'
})
export class ProductsHeaderComponent implements OnInit {
    @Output() columnsCountChange = new EventEmitter<number>();
    sort = 'desc'
    itemsShowCount = 10;

    ngOnInit(): void {}

    onSortUpdated(newSort: string): void {
        this.sort = newSort;
    }

    onItemsUpdated(newItemsCount: number): void {
        this.itemsShowCount = newItemsCount;
    }

    onColumsUpdated(colsNumber: number): void {
        this.columnsCountChange.emit(colsNumber);
    }
}
