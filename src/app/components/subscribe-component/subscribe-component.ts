import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscribe-component',
  imports: [FormsModule],
  templateUrl: './subscribe-component.html',
  styleUrl: './subscribe-component.css',
})
export class SubscribeComponent {
  @ViewChild('myForm') myForm!: NgForm;

  notValidField(field: string): boolean {
    return this.myForm?.controls[field]?.invalid && this.myForm?.controls[field]?.touched;
  }

  save(myForm: NgForm) {
    if (this.myForm.valid) {
      this.myForm.reset();
    }
  }
}
