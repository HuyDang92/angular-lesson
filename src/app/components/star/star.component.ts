import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
    this.rating = 0;
    this.starWidth = (this.rating * 75) / 5;
  }
  ngOnChanges(): void {
    this.starWidth = (this.rating * 75) / 5;
  }
  ngOnInit(): void {}
  onClicked() {
    this.ratingClicked.emit(`Đánh giá sản phẩm này là ${this.rating} sao!`);
  }
}
