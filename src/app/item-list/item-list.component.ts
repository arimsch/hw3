import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../shared/models/item';
import { BasketService } from '../shared/services/basket.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less'],
})
export class ItemListComponent {
  public items: Item[] = [
    {
      id: 1,
      title: 'weed',
      price: 40,
      count: 1,
    },
  ];
  @Output()
  changePage = new EventEmitter<null>();

  constructor(private readonly basketService: BasketService) {}

  public togglePage() {
    this.changePage.emit(null);
  }

  public addItem(item: Item): void {
    this.basketService.addSelectedItem(item);
  }
}
