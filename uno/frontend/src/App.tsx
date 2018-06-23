import * as React from 'react';
import './App.css';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Demo } from './modules/demo/DemoPage/DemoPage';
import { ProjectPage } from './modules/project/ProjectPage';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={ProjectPage} />
          <Route path='/demo' component={Demo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
