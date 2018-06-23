import * as React from 'react';
import { Button } from 'react-toolbox/lib/button';
import { Layout, Panel } from 'react-toolbox/lib/layout';
import { ProjectCard } from '../../project/ProjectListPage/ProjectCard';
import * as styles from './DemoPage.css';

import { Note } from '../../note';
import { DemoElement } from '../DemoElement';

export class DemoPage extends React.Component {
  public render() {
    return (
      <div className={styles.root}>
        <Layout>
          <Panel>
            <DemoElement title="Название компонента">Место для компонента</DemoElement>
            <DemoElement title="Create project button">
              <Button label="Create project" primary={true} raised={true} />
            </DemoElement>
            <DemoElement title="Project card">
              <ProjectCard />
            </DemoElement>
            <DemoElement title="Заметка">
              <Note
                editNote={false}
                cardMedia={true}
                creationTime={new Date()}
                text={'Текст'}
                file={'https://placeimg.com/800/450/nature'}
              />
            </DemoElement>
          </Panel>
        </Layout>
      </div>
    );
  }
}
