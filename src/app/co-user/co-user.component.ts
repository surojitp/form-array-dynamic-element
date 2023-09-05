import { Component,Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-co-user',
  templateUrl: './co-user.component.html',
  styleUrls: ['./co-user.component.css']
})
export class CoUserComponent implements OnInit {
  @Input() public customerInfo: FormGroup | any;
  @Input() public coUserData: any;
  constructor(private formBuilder : FormBuilder){}

  ngOnInit(): void {
    // console.log(this.customerInfo);
    console.log(this.coUserData);
    this.coUserData.map(e => {
      this.addCoUser(e.same_as_applicant, e.firstName, e.lastName, e.username, e.email)
    })
  }

  getControlsCoUser() {
    return (this.customerInfo.get('co_users') as FormArray).controls;
  }

  addCoUser(same_as_applicant=false, co_firstName="", co_lastName="", co_username="", co_email=""){
    let coUsers = this.customerInfo.get('co_users') as FormArray;
    coUsers.push(this.formBuilder.group({
      same_as_applicant: [same_as_applicant],
      co_firstName : [co_firstName, [Validators.required]],
      co_lastName : [co_lastName, [Validators.required]],
      co_username : [co_username, [Validators.required]],
      co_email : [co_email, [Validators.required]]
    }));
  }

  sameAsUser(e, index){
    console.log(index, "e----", e.target.checked);
    let firstName = this.customerInfo.get("firstName").value
    let lastName = this.customerInfo.get("lastName").value
    let username = this.customerInfo.get("username").value
    let email = this.customerInfo.get("email").value
    if(e.target.checked){
      this.customerInfo.get("co_users").at(index).get('co_firstName').patchValue(firstName)
      this.customerInfo.get("co_users").at(index).get('co_lastName').patchValue(lastName)
      this.customerInfo.get("co_users").at(index).get('co_username').patchValue(username)
      this.customerInfo.get("co_users").at(index).get('co_email').patchValue(email)
    }else{
      if(this.coUserData.length){
        let {same_as_applicant, firstName, lastName, username, email} = this.coUserData[index];
        this.customerInfo.get("co_users").at(index).get('same_as_applicant').patchValue(same_as_applicant)
        this.customerInfo.get("co_users").at(index).get('co_firstName').patchValue(firstName)
        this.customerInfo.get("co_users").at(index).get('co_lastName').patchValue(lastName)
        this.customerInfo.get("co_users").at(index).get('co_username').patchValue(username)
        this.customerInfo.get("co_users").at(index).get('co_email').patchValue(email)

      }else{
        this.customerInfo.get("co_users").at(index).get('co_firstName').patchValue("")
        this.customerInfo.get("co_users").at(index).get('co_lastName').patchValue("")
        this.customerInfo.get("co_users").at(index).get('co_username').patchValue("")
        this.customerInfo.get("co_users").at(index).get('co_email').patchValue("")
      }
      
    }
    // console.log(this.customerInfo.get("co_users").at(0).get('co_firstName').patchValue("test"));    
  }
  removeCoUser(index){
    console.log(index)
    this.customerInfo.get("co_users").removeAt(index)
  }
}
