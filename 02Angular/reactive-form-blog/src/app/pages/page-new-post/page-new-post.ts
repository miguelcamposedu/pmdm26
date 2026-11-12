import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [ReactiveFormsModule, NgbInputDatepicker],
  selector: 'app-page-new-post',
  styleUrl: './page-new-post.css',
  templateUrl: './page-new-post.html',
})
export class PageNewPost {
  publishLater = false;

  title = new FormControl('');
  description = new FormControl('');
  email = new FormControl('');
  category = new FormControl('');
  tags = new FormControl('');
  publishDate = new FormControl('');

  updatePublishLater() {
    this.publishLater = !this.publishLater;
  }

  formSubmit() {
    console.log(this.title.value);
    console.log(this.description.value);
    console.log(this.email.value);
    console.log(this.category.value);
    console.log(this.tags.value);
    console.log(this.publishDate.value);  
  }
}
