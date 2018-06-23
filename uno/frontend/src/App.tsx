import * as React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DemoPage } from "./modules/demo/DemoPage";
import { ProjectPage } from "./modules/project/ProjectPage";

export class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact={true} path="/" component={ProjectPage} />
                        <Route path="/demo" component={DemoPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
