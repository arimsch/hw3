import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BasketService } from '../shared/services/basket.service';
import { Item } from '../shared/models/item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent implements OnInit, OnDestroy {
  public items: Item[] = [];
  public sum = 0;
  public courseSymbol = '$';

  @Output()
  public changePage = new EventEmitter<null>();

  constructor(private readonly basketService: BasketService) {}

  ngOnInit(): void {
    this.basketService.initialize();
    this.basketService.items$.subscribe(data => {
      this.items = data;
      this.sum = this.basketService.summary;
    });
  }

  ngOnDestroy(): void {
    this.basketService.items$.unsubscribe();
  }

  public togglePage(): void {
    this.changePage.emit(null);
  }

  public deleteItem(item: Item): void {
    this.basketService.deleteItem(item);
  }

  public updateItem(item: Item): void {
    this.basketService.updateItem(item);
  }
}
