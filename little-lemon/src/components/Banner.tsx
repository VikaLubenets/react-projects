import { PropsBanner } from "@/utils/types";
import React, { FunctionComponent } from "react"

export const Banner: FunctionComponent<PropsBanner> = ({header, subtitle, buttonName}) => {
    return (
        <React.Fragment>
            <h2>{header}</h2>
            {Boolean(subtitle) && <h3>{subtitle}</h3>}
            <a>{buttonName || 'Reserve'}</a>
        </React.Fragment>
    );
}