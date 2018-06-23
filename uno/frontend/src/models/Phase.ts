import { observable } from 'mobx';

import { Note } from './Note';

export enum Type {
  Wants = 'wants',
  Hypothesis = 'hypothesis',
  Mockups = 'mockups',
  MockupsTest = 'mockupsTest',
  Design = 'design',
  DesignTest = 'designTest',
}

export class Phase {
  @observable public notes: Note[];
  @observable public type: Type;
  @observable public creationTime: Date;

  constructor({ notes = [], type = Type.Wants, creationTime = new Date() }: Partial<Phase> = {}) {
    this.notes = notes;
    this.type = type;
    this.creationTime = creationTime;
  }
}
