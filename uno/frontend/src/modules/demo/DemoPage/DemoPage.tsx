import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Layout, Panel } from 'react-toolbox/lib/layout';
import * as styles from './DemoPage.css';

import { DemoElement } from '../DemoElement';

export class DemoPage extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        <Layout>
          <Panel>
            <DemoElement title="Название компонента">Место для компонента</DemoElement>
            <DemoElement title="Кнопка">
              <Button label="Create project" primary={true} raised={true} />
            </DemoElement>
          </Panel>
        </Layout>
      </div>
    );
  }
}
