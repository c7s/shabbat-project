import * as React from 'react';

import { DemoElement } from '../DemoElement';

export class DemoPage extends React.Component {

    public render() {
        return (
            <div>
                <DemoElement
                    title={'Название компонента'}
                    component={'Место для компонента'}
                />
            </div>
        )
    }
}
