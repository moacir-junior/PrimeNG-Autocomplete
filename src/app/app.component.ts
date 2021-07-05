import { Component, ViewChild } from '@angular/core';

import { Country } from './country';
import { CountryService } from "./countryservice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild("autocompleteField") autocompleteField: any;

  selectedCountry!: Country;
  countries!: Country[];
  filteredCountries!: Country[];
  selectedCountries!: Country[];
  selectedCountryAdvanced!: Country[];

  constructor(
    private countryService: CountryService,
  ) {}

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  filterCountry(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  onSelect(event: any) {
    console.log(event);
  }
}
