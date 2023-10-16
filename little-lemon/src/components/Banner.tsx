import { PropsBanner } from "@/utils/types";
import React, { FunctionComponent } from "react"

export const Banner: FunctionComponent<PropsBanner> = ({header, subtitle, buttonName}) => {
    return (
        <article className="banner-block">
            <h2 className="banner-title">{header}</h2>
            {Boolean(subtitle) && <h3 className="banner-subtitle">{subtitle}</h3>}
            <a className="banner-button">{buttonName || 'Reserve'}</a>
        </article>
    );
}