import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../../assets/data/type';

@Component({
  selector: 'hns-sidemenu',
  imports: [NgClass, NgStyle],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent {
  showmenu: boolean = false

  project?: IProject;

  constructor(private projectService: ProjectService) {
    this.projectService.getObservable().subscribe(x => {
      this.project = x
      this.showmenu = !this.showmenu

      const section = document.getElementById("section") as HTMLElement
      if (section) {
        section.scroll({ top: 0, behavior: 'smooth' })
      }
    });

  }

  close() {
    this.showmenu = !this.showmenu
  }

  goTo(url?: string) {
    this.showmenu = false

    if (url) {
      window.open(url, '_blank');
      return;
    }
    document.getElementById('Contato')?.scrollIntoView();
  }
}
