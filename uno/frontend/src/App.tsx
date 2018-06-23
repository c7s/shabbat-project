import * as React from 'react';
import { observer } from 'mobx-react';
import autobindDecorator from 'autobind-decorator';

import './App.css';

import { Route, Switch } from 'react-router-dom';
import { DemoPage } from './modules/demo/DemoPage';
import { ProjectPage } from './modules/project/ProjectPage';
import { Store as StoreModel } from './models';

interface IAppProps {
  store?: StoreModel;
}

@observer
export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" render={this.renderProjectPage} />
          <Route path="/demo" component={DemoPage} />
        </Switch>
      </div>
    );
  }

  @autobindDecorator
  private renderProjectPage(): JSX.Element {
    if (!this.props.store) {
      throw new Error();
    }
    return <ProjectPage project={this.props.store.projectList.projects[0]}>hey</ProjectPage>;
  }
}
