import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import Validation from './utils//Validation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Angular 12 Firestore Crud';

  form: FormGroup | undefined;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        Description: ['', Validators.required]
      }
    );
  }

  get f():void {
    this.submitted = true;

    if (this.form?.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form?.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form?.reset();
  }

}
