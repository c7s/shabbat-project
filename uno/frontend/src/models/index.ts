import { ProjectList } from "./ProjectList";

export class Store {
  public projectList: ProjectList;

  constructor() {
    this.projectList = new ProjectList();
  }
}

export { Feature } from "./Feature";
export { Note } from "./Note";
export { Phase } from "./Phase";
export { Project } from "./Project";
export { ProjectList } from "./ProjectList";
export { Version } from "./Version";
