import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, partition } from 'rxjs';
import { Country } from '../models/countries';
import { map, reduce } from 'rxjs/operators';

@Injectable()
export class CountriesService {
  public countries: Country[] = [];

  constructor(private readonly _http: HttpClient) {}

  public getCountry(): Observable<object[]> {
    return this._http.get<object[]>(
      'https://restcountries.com/v3.1/all?fields=name,currencies'
    );
    // .pipe(map(el => Object.values(el)))

    // .pipe(reduce((acc, el) => {
    //     // Object.entries(el).forEach((obj =>{
    //     //     acc.push(obj[1]['name']['common']);
    //     // })
    //     //     );
    //         console.log(el);
    //         console.log(acc)
    //     // acc.push('el')
    // }));
    //     .pipe(map((el) =>
    //     (Object.entries(el).forEach(obj => {
    //         console.log(new Country(obj[1]['name']['common'], obj[1]['name']['common'],obj[1]['name']['common']));
    // }))));

    // console.log(
  }
  // public gett(){
  //     this.getCountry().subscribe(data => Object.entries(data).forEach(el => this.countries.push(
  //         new Country(
  //             el[1]['name']['common'],
  //             Object.keys(el[1]['currencies'])[0],
  //             el[1]['currencies'][`${Object.keys(el[1]['currencies'])[0]}`]
  //         ))));
  //         console.log(this.countries[0]);
  // }
}
