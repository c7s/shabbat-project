import * as React from 'react';
import { Layout, Panel } from 'react-toolbox/lib/layout';
import * as styles from './DemoPage.css';

import { DemoElement } from '../DemoElement';
import { Button } from 'react-toolbox/lib/button';

export class DemoPage extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        <Layout>
          <Panel>
            <DemoElement title={'Название компонента'} component={'Место для компонента'} />
            <DemoElement
              title={'Кнопка'}
              component={
                <Button
                  className={'createProject'}
                  label="Create project"
                  primary={true}
                  raised={true}
                />
              }
            />
          </Panel>
        </Layout>
      </div>
    );
  }
}
