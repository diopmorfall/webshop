import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-product-box',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatIconModule],
    templateUrl: './product-box.component.html',
    styleUrl: './product-box.component.css'
})
export class ProductBoxComponent {
    @Input() fullWidthMode = false
}
