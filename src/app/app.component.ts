import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  customerInfo: FormGroup= new FormGroup({});

  coUserData: any= [
    {
      same_as_applicant: false,
      firstName : "John",
      lastName : "Doe",
      username : "john",
      email : "john@email.com",
    },
    {
      same_as_applicant: false,
      firstName : "Ana",
      lastName : "Le",
      username : "ana",
      email : "ana@email.com",
    }
  ]

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
    this.customerInfo = this.formBuilder.group({
      firstName : [],
      lastName : [],
      username : [],
      email : [],
      products : this.formBuilder.array([]),
      co_users : this.formBuilder.array([])
    })
    this.setDefaultData();
    this.customerInfo.patchValue({
      firstName : "Surojit",
      lastName : "Paul",
      username : "suro",
      email : "suro@email.com",
    })
  }

  addProduct(name = "", desc = ""){
    let products = this.customerInfo.get('products') as FormArray;
    products.push(this.formBuilder.group({
      name : [name, [Validators.required]],
      description : [desc, [Validators.required]]
    }));
  }

  createCustomerInfo(){
    console.log('data is ', this.customerInfo.value);
    this.customerInfo?.markAllAsTouched();
  }

  setDefaultData(){
    console.log("setDefaultData");
    
    this.addProduct("tyre", "rubber material");
  }

  getControls() {
    return (this.customerInfo.get('products') as FormArray).controls;
  }

  // getControlsCoUser() {
  //   return (this.customerInfo.get('co_users') as FormArray).controls;
  // }

  // addCoUser(co_firstName="", co_lastName="", co_username="", co_email=""){
  //   let coUsers = this.customerInfo.get('co_users') as FormArray;
  //   coUsers.push(this.formBuilder.group({
  //     co_firstName : [co_firstName, [Validators.required]],
  //     co_lastName : [co_lastName, [Validators.required]],
  //     co_username : [co_username, [Validators.required]],
  //     co_email : [co_email, [Validators.required]]
  //   }));
  // }


}