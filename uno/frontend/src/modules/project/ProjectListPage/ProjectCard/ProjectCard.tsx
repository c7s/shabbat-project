import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardText, CardTitle } from 'react-toolbox/lib/card';

// import * as styles from './ProjectCard.css';

import './defaultImage.jpg';

export class ProjectCard extends React.Component {
  public render() {
    return (
      <Card style={{ width: '350px' }}>
        <CardMedia aspectRatio="wide" image="https://placeimg.com/800/450/nature" />
        <CardTitle title="Title goes here" subtitle="Subtitle here" />
        <CardText>dummyText</CardText>
        <CardActions>
          <Button label="Action 1" />
          <Button label="Action 2" />
        </CardActions>
      </Card>
    );
  }
}
