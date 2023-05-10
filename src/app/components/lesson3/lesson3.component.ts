import { Component } from '@angular/core';
import { Inventor } from './inventor';
@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css'],
})
export class Lesson3Component {
  inventors: Inventor[] = [
    { id: 1, first: 'Đặng', last: 'Huy', birth: 2003, passed: 2200 },
    { id: 2, first: 'Nguyễn', last: 'Tài', birth: 2003, passed: 2200 },
    { id: 3, first: 'Nguyễn', last: 'Khang', birth: 2003, passed: 2200 },
  ];
  
}
