import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  err: string = '';

  userData = {
    username: '',
    password: '',
  };
  constructor(private router: Router) {}
  @ViewChild('loginForm', { static: false, read: NgForm })
  loginForm!: NgForm;
  ngOnInit(): void {}
  onSubmit() {
    if (
      this.userData.username === 'huy922003' &&
      this.userData.password === '922003'
    ) {
      this.router.navigate(['/']);
    } else {
      this.err = 'Sai tài khoản mật khẩu!';
      console.log(this.err);
    }
  }
  suggest() {
    this.userData.username = 'name@fpt.edu.vn';
  }
}
