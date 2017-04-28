import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
/**
 * Created by Administrator on 2017/4/28.
 */

//校验表单调用的接口说明
//xxxx(control : AbstractsControl) : {[key : string] : any}{
//  return null;
// }


export function mobileValidator(formControl : FormControl) : any{
  let mobilePattern = /^[1][3|4|5|7|8]+\d{9}$/;
  let valid = mobilePattern.test(formControl.value);
  //console.log('mobile的校验结果是' + valid);
  return valid ? null : {mobile : {errorMsg:'两次密码不一致'}};
}

export function mobileAsyncValidator(formControl : FormControl) : any{
  let mobilePattern = /^[1][3|4|5|7|8]+\d{9}$/;
  let valid = mobilePattern.test(formControl.value);
  //console.log('mobile的校验结果是' + valid);
  return Observable.of(valid ? null : {mobile : true}).delay(3000);
}

export function equalValidator(formGroup : FormGroup) : any{
  let password  = formGroup.get('password');
  let pconfirm = formGroup.get('pconfirm');
  let isEqual : boolean = (password.value === pconfirm.value);
  //console.log('两次password的校验结果是' + isEqual);
  return isEqual ? null : {equal : true};
}
