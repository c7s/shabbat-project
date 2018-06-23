import * as React from 'react';

import * as styles from '../DemoPage/DemoPage.css';

interface IDemoElementProps {
  title: string;
  component: JSX.Element | string;
}

export function DemoElement({ title, component }: IDemoElementProps): JSX.Element {
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{component}</div>
    </div>
  );
}
