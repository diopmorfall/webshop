import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-filters',
    standalone: true,
    imports: [CommonModule, MatExpansionModule, MatListModule],
    templateUrl: './filters.component.html',
    styleUrl: './filters.component.css'
})
export class FiltersComponent {
    categories = ['manga', 'figures'];
    @Output() showCategory = new EventEmitter<string>()

    onShowCategory(category: string): void {
        this.showCategory.emit(category);
    }
}
