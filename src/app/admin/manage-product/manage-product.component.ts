import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css'],
})
export class ManageProductComponent implements OnInit {
  productForm!: FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      productName: new FormControl('', [
        Validators.required,
        this.productNameValidator,
      ]),
      productCode: new FormControl('', Validators.required),
      des: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      starRating: new FormControl('', Validators.required),
      imageUrl: new FormControl(
        'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-600x600.jpg'
      ),
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      alert('Thêm sản phẩm thành công');
      this.productForm.reset();
      console.log(this.productForm.value);
      // Thực hiện các xử lý khác
    }
  }

  productNameValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const productName: string = control.value;
    if (
      productName &&
      (productName.includes('hàng trắng') || productName.includes('ma túy'))
    ) {
      return { invalidProductName: true };
    }
    return null;
  }
}
