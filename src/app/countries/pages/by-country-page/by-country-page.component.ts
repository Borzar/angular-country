import { Component } from '@angular/core';
import {CountriesService} from 'src/app/services/countries.service';
import {Country} from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = []

  constructor (private countriesService: CountriesService){}

  searchByCountry(searchValue: string):void {
    this.countriesService.searchCountry(searchValue)
    .subscribe( countries => {
      this.countries = countries
    })
  }


}
