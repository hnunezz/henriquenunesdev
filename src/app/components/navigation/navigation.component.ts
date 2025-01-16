import { routes } from './../../app.routes';
import { NgClass } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'hns-navigation',
  imports: [NgClass],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  navigation = [
    { label: "Início", active: true, anchor: "Inicio" },
    { label: "Projetos", active: false, anchor: "Projetos" },
    { label: "Contato", active: false, anchor: "Contato" },
  ]

  setNav(anchor: string) {
    this.navigation.forEach(nav => {
      nav.active = false;
      if (nav.anchor === anchor) {
        nav.active = true;
      }
    });

    document.getElementById(anchor)?.scrollIntoView();
  }

}
