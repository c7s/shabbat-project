import * as React from "react";
import { Layout, Panel } from "react-toolbox/lib/layout";

import { DemoElement } from "../DemoElement";

export class DemoPage extends React.Component {
    public render() {
        return (
            <Layout>
                <Panel>
                    <DemoElement title={"Название компонента"} component={"Место для компонента"} />
                </Panel>
            </Layout>
        );
    }
}
