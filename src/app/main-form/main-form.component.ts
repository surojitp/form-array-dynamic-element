
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators,  FormArray } from '@angular/forms';
// import {ChildFormComponent} from './child-form/child-form.component'

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  // userSubject: any; 
  // formdata: any;
  // ngOnInit() { 
  //    this.formdata = new FormGroup({ 
  //       userSubject: new FormControl("Math"),
  //       nameSub: new FormControl("")
  //    }); 
  // } 
  // onClickSubmit(data: any) {
  //   console.log(data)
  //   // this.userSubject = data.userSubject;
  // }
  fields: any[] = [
    {
    "fieldName": "Name",
    "fieldType": "text",
    "required": true
    },
    {
    "fieldName": "Email",
    "fieldType": "email",
    "required": true,
    "validator": "email"
    },
    {
    "fieldName": "Message",
    "fieldType": "text",
    "required": null
    }
  ];
  formFields?: any[];
  form = new FormGroup({});

  ngOnInit(): void {
    
    for (const formField of this.fields) {
      this.form.addControl(formField.fieldName, new FormControl(''));
    }
    this.formFields = this.fields;
  }

  onSubmit(): void {
    // if (this.form.valid) {
    //   let value = this.form.value;
    // }
    console.log(this.form.value);
    
  }

}
