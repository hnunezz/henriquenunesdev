import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { projects } from '../../../assets/data/data';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'hns-projects',
  imports: [NgStyle],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private projectService = inject(ProjectService);

  projects = projects;

  viewProject(project: any) {
    this.projectService.setObservable(project)
  }
}
