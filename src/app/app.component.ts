import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lab1';
  student = {
    fullname: 'Đặng Huỳnh Huy',
    age: 20,
    sex: 'Nam',
    birth: '09/02/2003',
    img: 'poly.png',
    point: 9.0,
  };
}
