import { Language } from './../language';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../translation.module';

import { TranslateService } from './translate.service';

describe('TranslateService', () => {
  let service: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ]
    });
    service = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have #getSupportedLanguages function', () => {
    expect(service.getSupportedLanguages).toBeTruthy();
  });

  it('should have #changeLanguage function', () => {
    expect(service.changeLanguage).toBeTruthy();
  });

  it('should have #translate function', () => {
    expect(service.translate).toBeTruthy();
  });

  it('#getSupportedLanguages should return value from observable',
    (done: DoneFn) => {
      service.getSupportedLanguages().subscribe((languages: Language[]) => {
        expect(typeof languages).toBe(typeof Array<Language>());
        done();
      });
    });
});
