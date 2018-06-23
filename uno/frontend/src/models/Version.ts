import { observable } from "mobx";

import { Phase } from "./Phase";

export class Version {
  @observable public name: string;
  @observable public phases: Phase[];
  @observable public creationTime: Date;

  constructor({
    name = "",
    phases = [],
    creationTime = new Date()
  }: Partial<Version> = {}) {
    this.name = name;
    this.phases = phases;
    this.creationTime = creationTime;
  }
}
