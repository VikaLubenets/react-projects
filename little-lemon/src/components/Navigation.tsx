import { PropsNavigation } from "@/utils/types";
import React, { FunctionComponent } from "react"
import Image from 'next/image'

export const Navigation: FunctionComponent<PropsNavigation> = ({logoSrc, navs}) => {
    return (
        <React.Fragment>
            <Image 
                src={logoSrc}
                alt='Logo'
                width={200}
                height={55}
                className='logo-img'
            />
            <nav>
                <ul className="nav-container">
                {navs.map((nav, index) => (
                    <li  key={`${nav}+${index}`} className="nav-link">
                        <a key={index} href={nav.link}>{nav.title}</a>
                    </li>
                ))}
                </ul>
            </nav>
        </React.Fragment>
    );
}