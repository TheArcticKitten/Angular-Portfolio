import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() name!: string;
  @Input() email!: string;
  @Input() subject!: string;
  @Input() message!: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    alert('Submit Form?')
  }
}
