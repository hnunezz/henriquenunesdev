import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    NavigationComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    SidemenuComponent
  ],
  templateUrl: './app.component.html',
  styles: [`
    div {
      display: flex;
      flex-direction: column;
      gap: 200px;
      height: 100vh;
      overflow: auto;
    }

    #Inicio {
      height: 646px;
      display: block;
    }

    section {
      position: relative;
      z-index: 2;
    }
  `]
})
export class AppComponent {
  title = 'Henrique Nunes';

  constructor() {
    this.consoleLog()
    this.goToTop()
  }

  private goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  private consoleLog() {
    console.log(
      `
        ██   ██ ███████ ███    ██ ██████  ██  ██████  ██    ██ ███████
        ██   ██ ██      ████   ██ ██   ██ ██ ██    ██ ██    ██ ██
        ███████ █████   ██ ██  ██ ██████  ██ ██    ██ ██    ██ █████
        ██   ██ ██      ██  ██ ██ ██   ██ ██ ██ ▄▄ ██ ██    ██ ██
        ██   ██ ███████ ██   ████ ██   ██ ██  ██████   ██████  ███████
                                                ▀▀

        ███    ██ ██    ██ ███    ██ ███████ ███████
        ████   ██ ██    ██ ████   ██ ██      ██
        ██ ██  ██ ██    ██ ██ ██  ██ █████   ███████
        ██  ██ ██ ██    ██ ██  ██ ██ ██           ██
        ██   ████  ██████  ██   ████ ███████ ███████


          ██████  ███████ ██    ██
          ██   ██ ██      ██    ██
          ██   ██ █████   ██    ██
          ██   ██ ██       ██  ██
        ██ ██████  ███████   ████
      `
    )
  }
}
