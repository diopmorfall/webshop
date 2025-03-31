import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ProductsHeaderComponent } from "./components/products-header/products-header.component";
import { FiltersComponent } from "./filters/filters.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductBoxComponent } from "./components/product-box/product-box.component";

const ROWS_HEIGHT: { [id: number]: number } = {
    1: 400,
    3: 335,
    4: 350
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        MatSidenavModule,
        ProductsHeaderComponent,
        FiltersComponent,
        MatGridListModule,
        ProductBoxComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    cols = 3;
    rowHeight = ROWS_HEIGHT[this.cols];
    category: string | undefined;

    ngOnInit(): void { }

    onColumnsCountChange(colsNumber: number): void {
        this.cols = colsNumber
        this.rowHeight = ROWS_HEIGHT[this.cols]
    }

    onShowCategory(newCategory: string): void {
        this.category = newCategory;
    }
}
