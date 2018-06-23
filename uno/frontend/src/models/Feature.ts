import { observable } from 'mobx';
import * as uniqid from 'uniqid';

import { Version } from './Version';

export class Feature {
  @observable public id: string;
  @observable public name: string;
  @observable public versions: Version[];
  @observable public creationTime: Date;

  constructor({
    id = uniqid(),
    name = '',
    versions = [],
    creationTime = new Date(),
  }: Partial<Feature> = {}) {
    this.id = id;
    this.name = name;
    this.versions = versions;
    this.creationTime = creationTime;
  }
}
