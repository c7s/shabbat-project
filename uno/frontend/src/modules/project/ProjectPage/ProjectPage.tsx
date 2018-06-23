import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';

export class ProjectPage extends React.Component {
  public render() {
    return (
      <div className="root">
        <div className="menu">
          <Button className={'createProject'} label="Create project" primary={true} raised={true} />
        </div>
      </div>
    );
  }
}
