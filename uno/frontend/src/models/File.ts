import { observable } from 'mobx';
import * as uniqid from 'uniqid';

export class File {
  @observable public id: string;
  @observable public name: string;
  @observable public extension: string;
  @observable public file: File | undefined;

  constructor({ id = uniqid(), name = '', extension = '', file }: Partial<File>) {
    this.id = id;
    this.name = name;
    this.extension = extension;
    this.file = file;
  }
}
