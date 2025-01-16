import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hns-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  setNav() {
    document.getElementById('Projetos')?.scrollIntoView();
  }
}
