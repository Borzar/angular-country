import { Component } from '@angular/core';
import {CountriesService} from 'src/app/services/countries.service';
import {Country} from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = []

  constructor (private countriesService: CountriesService){}

  searchByRegion(searchValue: string):void {
    this.countriesService.searchRegion(searchValue)
    .subscribe( countries => {
      this.countries = countries
    })
  }

}
