import { Component } from '@angular/core';

@Component({
  selector: 'hns-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  goTo(url: string) {
    window.open(url, '_blank');
  }
}
