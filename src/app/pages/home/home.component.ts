import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ProductsHeaderComponent } from "./components/products-header/products-header.component";
import { FiltersComponent } from "./filters/filters.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatSidenavModule, ProductsHeaderComponent, FiltersComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    cols = 3;
    category: string | undefined;

    ngOnInit(): void { }

    onColumnsCountChange(colsNumber: number): void {
        this.cols = colsNumber
    }

    onShowCategory(newCategory: string): void {
        this.category = newCategory;
    }
}
