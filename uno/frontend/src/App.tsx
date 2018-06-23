import * as React from 'react';
import { observer } from 'mobx-react';
import autobindDecorator from 'autobind-decorator';

import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { DemoPage } from './modules/demo/DemoPage';
import { ProjectPage } from './modules/project/ProjectPage';
import { Store as StoreModel } from './models';

interface IAppProps {
  store?: StoreModel;
}
import { ProjectListPage } from './modules/project/ProjectListPage';

@observer
export class App extends React.Component<IAppProps> {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact={true} path="/" component={ProjectListPage} />
            <Route path="/demo" component={DemoPage} />
          </Switch>
        </div>
      </BrowserRouter>
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
