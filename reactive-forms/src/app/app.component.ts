import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormArray} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import {forbiddenNameValidator} from './shared/user-name.validator'
import {PasswordValidator} from './shared/password.validator'
import {RegistrationService} from './registration.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registrationForm : FormGroup; 
  constructor(private formBuilder : FormBuilder, private registrationService : RegistrationService){
  }

  ngOnInit(){
    this.registrationForm = this.formBuilder.group({
      userName : ['', [Validators.required,Validators.minLength(3), forbiddenNameValidator(/password/)]],
      password : [''],
      confirmPassword : [''],
      email : '',
      alternateEmails: this.formBuilder.array([]),
      subscriber : [false],
      address : this.formBuilder.group({
          state : ['WB'],
          city : ['kolkata'],
          postalCode : ['700059'],
      })
    }, {validators :  PasswordValidator});

    this.registrationForm.get('subscriber').valueChanges
    .subscribe((checkdValue)=>{
      const email = this.registrationForm.get('email');
      if(checkdValue){
        email.setValidators(Validators.required);
      }else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })
  }

  get userName(){
    return this.registrationForm.get('userName');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.formBuilder.control(''));
  }

  // registrationForm = new FormGroup({
  //   userName : new FormControl('samarpita'),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //       state : new FormControl(''),
  //       city : new FormControl('kolkata'),
  //       postalCode : new FormControl('700059'),
  //   })
  // });

  // loadAPIData(){
  //   this.registrationForm.setValue({
  //     userName : 'samarpita',
  //     password : '',
  //     confirmPassword : '',
  //     address : {
  //         state : 'WB',
  //         city : 'kolkata',
  //         postalCode : '700059',
  //     }
  //   });
  // }
    loadAPIData(){
      this.registrationForm.patchValue({
        userName : 'samarpita',
        password : 'test',
        confirmPassword : 'test',
        
      });
    }

    onSubmit(){
      console.log(this.registrationForm.value);
      this.registrationService.register(this.registrationForm.value)
      .subscribe(
        response => console.log('Success.',response),
        error => console.error('Error!',error)
      );

    }
  
}
