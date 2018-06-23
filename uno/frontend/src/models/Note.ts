import { observable } from 'mobx';
import * as uniqid from 'uniqid';

import { File } from './File';

export class Note {
  @observable public id: string;
  @observable public text: string;
  @observable public files: File[];
  @observable public fileType: string;
  @observable public creationTime: Date;

  constructor({
    id = uniqid(),
    text = '',
    files = [],
    creationTime = new Date(),
  }: Partial<Note> = {}) {
    this.id = id;
    this.text = text;
    this.files = files;
    this.creationTime = creationTime;
  }
}
