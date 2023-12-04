import { Component, Input } from '@angular/core';
import { iProduct } from '../../Modules/iProduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input () product!:iProduct;
}
