import { Component } from '@angular/core';
import Iproduct from './product';
@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.css'],
})
export class Lesson5Component {
  products: Iproduct[] = [
    {
      id: 1,
      cate: 'Smartphone',
      name: 'Iphone 14',
      des: 'Iphone 14',
      thumb: 'ip14.jpg',
    },
    {
      id: 2,
      cate: 'Laptop',
      name: 'MacBook Pro',
      des: 'MacBook Pro',
      thumb: 'mb.jpg',
    },
    {
      id: 3,
      cate: 'Tablet',
      name: 'Ipad Pro 2022',
      des: 'Ipad Pro 2022',
      thumb: 'ipad.jpg',
    },
  ];
}
