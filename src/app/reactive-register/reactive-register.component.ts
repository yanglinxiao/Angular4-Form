import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {mobileValidator,equalValidator,mobileAsyncValidator} from "../validators/validator";

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {

  private formGroup : FormGroup;
  constructor(formBuilder : FormBuilder) {
    this.formGroup = formBuilder.group({
      username : ['',[Validators.required,Validators.minLength(5)]],
      mobile : ['',mobileValidator,mobileAsyncValidator],
      passwordsGroup : formBuilder.group({
        password : ['',Validators.minLength(5)],
        pconfirm : ['']
      },{validator : equalValidator})
    })
  }

  ngOnInit() {}

  onSubmit(){
    let valid = this.formGroup.get('username').valid;
    console.log(`username校验结果：${valid}`);
    let errors = this.formGroup.get('username').errors;
    console.log('username错误信息：' + JSON.stringify(errors));
    console.log(this.formGroup.value);
  }
}
