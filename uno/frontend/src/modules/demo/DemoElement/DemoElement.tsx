import * as React from 'react';

import * as styles from '../DemoPage/DemoPage.css';

interface IDemoElementProps {
  title: string;
  children: React.ReactChild;
}

export function DemoElement({ title, children }: IDemoElementProps): JSX.Element {
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
