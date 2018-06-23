import * as React from "react";

import "../DemoPage/DemoPage.css";

interface IDemoElementProps {
    title: string;
    component: JSX.Element | string;
}

export function DemoElement({ title, component }: IDemoElementProps): JSX.Element {
    return (
        <div className="component">
            <h3 className="title">{title}</h3>
            <div className="content">{component}</div>
        </div>
    );
}
