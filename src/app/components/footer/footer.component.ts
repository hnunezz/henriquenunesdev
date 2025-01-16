import { Component } from '@angular/core';

@Component({
  selector: 'hns-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  goTo(url: string) {
    window.open(url, '_blank');
  }
}
