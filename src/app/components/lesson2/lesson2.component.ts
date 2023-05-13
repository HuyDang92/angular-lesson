import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css'],
})
export class Lesson2Component {
  student = {
    fullname: 'Đặng Huỳnh Huy',
    age: 20,
    sex: 'Nam',
    birth: '09/02/2003',
    img: 'avt.jpg',
    point: 9.0,
  };
}
