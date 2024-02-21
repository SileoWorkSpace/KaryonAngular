import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.scss']
})

export class FormValidationsComponent {

  public validate = false;

  public submit() {
    this.validate = !this.validate;
  }

}