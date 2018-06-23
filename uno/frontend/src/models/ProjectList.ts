import { observable } from "mobx";

import { Project } from "./Project";

export interface IProjectListParams {
  projects?: Project[];
}

export class ProjectList {
  @observable public projects: Project[];

  constructor({ projects = [] }: IProjectListParams = {}) {
    this.projects = projects;
  }
}
