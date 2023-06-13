import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  amount1: number = 0;
  amount2: number = 0;
  currency1: string = 'UAH';
  currency2: string = 'USD';
  usdUahRate: number = 0; // Add this line
  eurUahRate: number = 0; // Add this line
  usdEurRate: number = 0;
  eurUsdRate: number = 0;

  constructor(private exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this.exchangeRateService.getUsdUahRates().subscribe(
      (data) => {
        this.usdUahRate = data.rates.UAH;
      },
      (error) => {
        console.error('Failed to fetch exchange rates:', error);
      }
    );

    this.exchangeRateService.getEurUahRates().subscribe(
      (data) => {
        this.eurUahRate = data.rates.UAH;
      },
      (error) => {
        console.error('Failed to fetch exchange rates:', error);
      }
    );

    this.exchangeRateService.getUsdEurRates().subscribe(
      (data) => {
        this.usdEurRate = data.rates.EUR;
      },
      (error) => {
        console.error('Failed to fetch exchange rates:', error);
      }
    );

    this.exchangeRateService.getEurUsdRates().subscribe(
      (data) => {
        this.eurUsdRate = data.rates.USD;
      },
      (error) => {
        console.error('Failed to fetch exchange rates:', error);
      }
    );
  }

  convertCurrency() {
    if (this.currency1 === 'UAH' && this.currency2 === 'USD') {
      this.amount2 = this.amount1 / this.usdUahRate;
    } else if (this.currency1 === 'USD' && this.currency2 === 'UAH') {
      this.amount2 = this.amount1 * this.usdUahRate;
    } else if (this.currency1 === this.currency2) {
      this.amount2 = this.amount1
    } else if (this.currency1 === 'UAH' && this.currency2 === 'EUR') {
      this.amount2 = this.amount1 / this.eurUahRate;
    } else if (this.currency1 === 'EUR' && this.currency2 === 'UAH') {
      this.amount2 = this.amount1 * this.eurUahRate;
    } else if (this.currency1 === 'USD' && this.currency2 === 'EUR') {
      this.amount2 = this.amount1 * this.usdEurRate;
    } else if (this.currency1 === 'EUR' && this.currency2 === 'USD') {
      this.amount2 = this.amount1 * this.eurUsdRate;
    } else {
      this.amount2 = 0;
    }
  }

  convertCurrencyBack() {
    if (this.currency1 === 'UAH' && this.currency2 === 'USD') {
      this.amount1 = this.amount2 * this.usdUahRate;
    } else if (this.currency1 === 'USD' && this.currency2 === 'UAH') {
      this.amount1 = this.amount2 / this.usdUahRate;
    } else if (this.currency1 === this.currency2) {
      this.amount1 = this.amount2;
    } else if (this.currency1 === 'UAH' && this.currency2 === 'EUR') {
      this.amount1 = this.amount2 * this.eurUahRate;
    } else if (this.currency1 === 'EUR' && this.currency2 === 'UAH') {
      this.amount1 = this.amount2 / this.eurUahRate;
    } else if (this.currency1 === 'USD' && this.currency2 === 'EUR') {
      this.amount1 = this.amount2 * this.usdEurRate;
    } else if (this.currency1 === 'EUR' && this.currency2 === 'USD') {
      this.amount1 = this.amount2 * this.eurUsdRate;
    } else {
      this.amount1 = 0;
    }
  }
  

}
