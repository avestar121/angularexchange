import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any> {
  const url = 'https://api.exchangerate-api.com/v4/latest/UAH';
  return this.http.get<any>(url);
}

  getUsdUahRates(): Observable<any> {
    const url = 'https://api.exchangerate-api.com/v4/latest/USD';
    return this.http.get<any>(url);
  }

  getUsdEurRates(): Observable<any> {
    const url = 'https://api.exchangerate-api.com/v4/latest/USD';
    return this.http.get<any>(url);
  }

  getEurUsdRates(): Observable<any> {
    const url = 'https://api.exchangerate-api.com/v4/latest/EUR';
    return this.http.get<any>(url);
  }

  getEurUahRates(): Observable<any> {
    const url = 'https://api.exchangerate-api.com/v4/latest/EUR';
    return this.http.get<any>(url);
  }

}
