import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Layout, Panel } from 'react-toolbox/lib/layout';
import * as styles from './DemoPage.css';

import { DemoElement } from '../DemoElement';

export class DemoPage extends React.Component {
  public render() {
    const button = (
      <Button className={'createProject'} label="Create project" primary={true} raised={true} />
    );

    return (
      <div className={styles.root}>
        <Layout>
          <Panel>
            <DemoElement title={'Название компонента'} component={'Место для компонента'} />
            <DemoElement title={'Кнопка'} component={button} />
          </Panel>
        </Layout>
      </div>
    );
  }
}
