import { Injectable } from '@angular/core';
import { LocalStorageItem } from './local-storage-item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(
    localStorageItem: LocalStorageItem
    ): string {
    const item = localStorage.getItem(localStorageItem);
    if (item) {
      return item;
    } else {
      return '';
    }
  }

  setItem(
    localStorageItem: LocalStorageItem,
    value: string
    ): void {
      localStorage.setItem(localStorageItem, value);
    }
}
