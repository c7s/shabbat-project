import * as React from 'react';
import { observer } from 'mobx-react';

import { Project as ProjectModel } from '../../../models';

interface IProjectPageProps {
  project?: ProjectModel;
}

@observer
export class ProjectPage extends React.Component<IProjectPageProps> {
  public render() {
    if (!this.props.project) {
      throw new Error();
    }
    return <div>project name: {this.props.project.name}</div>;
  }
}
