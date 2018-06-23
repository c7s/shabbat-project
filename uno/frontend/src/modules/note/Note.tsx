import * as React from 'react';
import { IconButton } from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardText } from 'react-toolbox/lib/card';
import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';
import { Input } from 'react-toolbox/lib/input';

import * as style from './Note.css';

const MORE = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2
        2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </svg>
);

const DELET = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const EDIT = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02
        0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const DONE = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path
      d="M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2
        4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z"
    />
  </svg>
);

export interface INoteProps {
  editNote?: boolean;
  cardMedia?: boolean;
  creationTime: Date;
  text: string;
  file?: string;
  fileType?: string;
  handleEditOpenedNote: () => void;
  handleDeletedOpenedNote: () => void;
  handleDeletedEditNote: () => void;
  handleCreatEditNote: () => void;
}

export function Note(props: INoteProps): JSX.Element {
  return props.editNote ? (
    <EditNote
      handleCreatEditNote={props.handleCreatEditNote}
      handleDeletedEditNote={props.handleDeletedEditNote}
    />
  ) : (
    <OpenedNote
      cardMedia={props.cardMedia}
      creationTime={props.creationTime}
      text={props.text}
      file={props.file}
      fileType={props.fileType}
      handleDeletedOpenedNote={props.handleDeletedOpenedNote}
      handleEditOpenedNote={props.handleEditOpenedNote}
    />
  );
}

interface IOpenedNoteProps {
  cardMedia?: boolean;
  creationTime: Date;
  text: string;
  file?: string;
  fileType?: string;
  handleEditOpenedNote: () => void;
  handleDeletedOpenedNote: () => void;
}

function OpenedNote({
  cardMedia,
  creationTime,
  text,
  file,
  fileType,
  handleEditOpenedNote,
  handleDeletedOpenedNote,
}: IOpenedNoteProps): JSX.Element {
  return (
    <Card className={style.cardWrap}>
      {cardMedia && <CardMedia image={file} aspectRatio="wide" />}
      <CardText>{text}</CardText>
      <CardActions>
        <IconMenu icon={<MORE />} position="topLeft" menuRipple={true} className={style.buttonWrap}>
          <MenuItem
            value="settings"
            icon={<IconButton icon={<EDIT />} accent={true} />}
            caption="Редактировать"
            onClick={handleEditOpenedNote}
          />
          <MenuItem
            icon={<IconButton icon={<DELET />} accent={true} />}
            caption="Удалить"
            onClick={handleDeletedOpenedNote}
          />
        </IconMenu>
      </CardActions>
    </Card>
  );
}

interface IEditNoteProps {
  handleCreatEditNote: () => void;
  handleDeletedEditNote: () => void;
}

function EditNote({ handleCreatEditNote, handleDeletedEditNote }: IEditNoteProps): JSX.Element {
  return (
    <Card className={style.cardWrap}>
      <Input type="area" name="textCard" multiline={true} />
      <Input type="file" name="fileCard" />
      <div className={style.buttonWrap}>
        <IconButton icon={<DONE />} accent={true} onClick={handleCreatEditNote} />
        <IconButton icon={<DELET />} accent={true} onClick={handleDeletedEditNote} />
      </div>
    </Card>
  );
}
