import { LocalStorageItem } from './../../core/services/local-storage/local-storage-item';
import { LocalStorageService } from './../../core/services/local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';
import { first, map, concatMap } from 'rxjs/operators';
import { Language } from '../language';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(
    private http: HttpClient,
    private translateService: NgxTranslateService,
    private localStorageService: LocalStorageService
  ) {
    translateService.setDefaultLang('en');
    const currentLanguage = this.localStorageService.getItem(LocalStorageItem.Language);
    if (currentLanguage !== null) {
      translateService.use(currentLanguage);
    }
   }

  getSupportedLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>('assets/i18n/supported_languages.json', { responseType: 'json' })
    .pipe(
      map((data: any) => data.SUPPORTED_LANGUAGES),
      first(),
      concatMap((array: Array<string>) => {
        return forkJoin(array.map((language: any) => {
          return this.http.get<Language>(`assets/i18n/${language}.json`, { responseType: 'json' })
          .pipe(
            map((languageData: any) => new Language().deserialize(language, languageData.LANGUAGE))
          );
        }));
      })
    );
  }

  changeLanguage(language: string): void {
    this.translateService.use(language);
    this.localStorageService.setItem(LocalStorageItem.Language, language);
  }

  translate(keys: string|string[]): Observable<any> {
    return this.translateService.get(keys);
  }
}
