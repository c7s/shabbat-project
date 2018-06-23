import { observable } from 'mobx';
import * as uniqid from 'uniqid';

import { Feature } from './Feature';

export class Project {
  @observable public id: string;
  @observable public name: string;
  @observable public features: Feature[];
  @observable public creationTime: Date;

  constructor({
    id = uniqid(),
    name = '',
    features = [],
    creationTime = new Date(),
  }: Partial<Project> = {}) {
    this.id = id;
    this.name = name;
    this.features = features;
    this.creationTime = creationTime;
  }
}
