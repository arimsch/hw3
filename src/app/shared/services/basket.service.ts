import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BasketService {
  private _selectedItems: Item[] = [];
  private _summary = 0;

  readonly items$ = new BehaviorSubject<Item[]>(this._selectedItems);

  public get summary(): number {
    return this._summary;
  }

  private updateSummary(): void {
    this._summary = this._selectedItems.reduce(
      (sum, i) => i.price * i.count + sum,
      0
    );
  }

  public initialize(): void {
    this.updateSummary();
    this.items$.subscribe(() => this.updateSummary());
  }

  private getIndex(item: Item): number {
    return this._selectedItems.findIndex(el => el.id === item.id);
  }

  public addSelectedItem(item: Item): void {
    const itemInd = this.getIndex(item);
    if (itemInd >= 0) {
      this._selectedItems[itemInd].count += item.count;
    } else {
      this._selectedItems.push(item);
    }
  }

  public deleteItem(item: Item): void {
    this._selectedItems.splice(this.getIndex(item), 1);
    this.items$.next(this._selectedItems);
  }

  public updateItem(item: Item): void {
    this._selectedItems[this.getIndex(item)].count = item.count;
    this.items$.next(this._selectedItems);
  }
}
