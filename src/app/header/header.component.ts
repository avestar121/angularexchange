import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../exchange-rate.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usdRate: number = 0;
  eurRate: number = 0;
  usdUahRate: number = 0;
  eurUahRate: number = 0;

  constructor(private exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this.exchangeRateService.getExchangeRates().subscribe(
      (data) => {
        console.log(data.rates)
        this.usdRate = data.rates.USD;
        this.eurRate = data.rates.EUR;
      },
      (error) => {
        console.error('Failed to fetch exchange rates:', error);
      }
    );

    this.exchangeRateService.getUsdUahRates().subscribe(
      (data) => {
        console.log(data.rates)
        this.usdUahRate = data.rates.UAH;
      },
      (error) => {
        console.error('Failed to fetch exchange rates:', error);
      }
    );

    this.exchangeRateService.getEurUahRates().subscribe(
      (data) => {
        console.log(data.rates)
        this.eurUahRate = data.rates.UAH;
      },
      (error) => {
        console.error('Failed to fetch exchange rates:', error);
      }
    );
  }
}
