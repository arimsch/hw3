import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../shared/models/countries';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddOrderComponent implements OnInit {
  public formOrder!: FormGroup;
  public country = 'russ';
  public countries: any;
  open = false;

  onClick(): void {
    console.log(this.open);
    this.open = !this.open;
  }

  onObscured(obscured: Event): void {
    if (obscured) {
      this.open = false;
    }
  }

  onActiveZone(active: Event): void {
    this.open = active && this.open;
  }

  public addCountry(eve: any) {
    console.log(eve.target.value);
  }

  constructor(
    private readonly countriesService: CountriesService,
    private readonly fb: FormBuilder
  ) {}

  private buildWalletForm(): void {
    this.formOrder = this.fb.group({
      name: [null, [Validators.required]],
      email: [null],
      adress: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.buildWalletForm();
    this.countriesService
      .getCountry()
      .pipe(map(el => console.log(el)))
      .subscribe(data => console.log(typeof data));
    //   this.countriesService.getCountry().subscribe(data => Object.entries(data).forEach(el => this.countries.push([
    //         el[1]['name']['common'],
    //         Object.keys(el[1]['currencies'])[0],
    //         el[1]['currencies'][`${Object.keys(el[1]['currencies'])[0]}`]
    //       ])));
    //       console.log(this.countries);
  }
  //   new Country(
  //       el[1]['name']['common'],
  //       Object.keys(el[1]['currencies'])[0],
  //       el[1]['currencies'][`${Object.keys(el[1]['currencies'])[0]}`]
  //   ))));
  // (Object.entries(data).forEach(el => this.countries.push([
  //   el[1]['name']['common'],
  //   Object.keys(el[1]['currencies'])[0],
  //   el[1]['currencies'][`${Object.keys(el[1]['currencies'])[0]}`]
  // ])));
  // });

  //   public get _name(): AbstractControl | null {
  //     return this.form.get('name');
  //   }

  //   public get _price(): AbstractControl | null {
  //     return this.form.get('price');
  //   }

  public submit(): void {
    this.formOrder.reset();
  }

  //   private makeMessageError(
  //     errorObj: ValidationErrors
  //   ): TuiValidationError | null {
  //     let errorType = Object.keys(errorObj)[0];
  //     switch (errorType) {
  //       case 'required': {
  //         return new TuiValidationError(TextErrors.REQUIRED);
  //       }
  //       case 'minlength': {
  //         return new TuiValidationError(
  //           TextErrors.MIN_LENGTH + errorObj.minlength.requiredLength
  //         );
  //       }
  //       case 'maxlength': {
  //         return new TuiValidationError(
  //           TextErrors.MAX_LENGTH + errorObj.maxlength.requiredLength
  //         );
  //       }
  //       case 'min': {
  //         return new TuiValidationError(TextErrors.MIN + errorObj.min.min);
  //       }
  //       case 'max': {
  //         return new TuiValidationError(TextErrors.MAX + errorObj.max.max);
  //       }
  //       case 'pattern': {
  //         if (errorObj.pattern.requiredPattern === `${NUMBER_PUTTERN}`) {
  //           return new TuiValidationError(TextErrors.ONLY_NUMBER);
  //         }
  //         break;
  //       }
  //     }
  //     return null;
  //   }

  //   public get computedErrorName(): TuiValidationError | null {
  //     if ((this._name?.dirty || this._name?.touched) && this._name?.errors) {
  //       return this.makeMessageError(this._name?.errors);
  //     }
  //     return null;
  //   }

  //   public get computedErrorPrice(): TuiValidationError | null {
  //     if ((this._price?.dirty || this._price?.touched) && this._price?.errors) {
  //       return this.makeMessageError(this._price?.errors);
  //     }
  //     return null;
  //   }
  // }
}
