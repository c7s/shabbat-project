import * as React from 'react';
import { INoteProps, Note } from './Note';

export interface INoteContainerProps {
  id?: string;
  editNote: boolean;
  cardMedia?: boolean;
  creationTime: Date;
  text: string;
  file?: string;
  fileType?: string;
}

export class NoteContainer extends React.Component<INoteContainerProps> {
  constructor(props: INoteContainerProps) {
    super(props);

    this.state = {};
  }

  public render(): JSX.Element {
    return React.createElement<INoteProps>(Note, {
      cardMedia: this.props.cardMedia,
      creationTime: this.props.creationTime,
      editNote: this.props.editNote,
      file: this.props.file,
      fileType: this.props.fileType,
      text: this.props.text,
      handleDeletedEditNote: this.handleDeletedEditNote,
      handleDeletedOpenedNote: this.handleDeletedOpenedNote,
      handleEditOpenedNote: this.handleEditOpenedNote,
      handleCreatEditNote: this.handleCreatEditNote,
    });
  }

  private handleDeletedEditNote() {
    return 'tets';
  }

  private handleDeletedOpenedNote() {
    return 'tets';
  }

  private handleEditOpenedNote() {
    return 'tets';
  }

  private handleCreatEditNote() {
    return 'tets';
  }
}
