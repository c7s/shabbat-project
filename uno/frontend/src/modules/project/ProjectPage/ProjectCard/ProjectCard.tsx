import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';

export class ProjectCard extends React.Component {
  public render() {
    return (
      <div className="root">
        <div className="menu">
          <Button label="Create project" primary={true} raised={true} />
        </div>
      </div>
    );
  }
}
