import { StaticImageData } from "next/image";

export interface PropsBanner {
    header: string;
    subtitle: string;
    buttonName: string;
}

export type NavLink = { link: string, title: string}

export interface PropsNavigation {
    logoSrc: StaticImageData;
    navs: NavLink[];
}

export interface Special {
    src: string;
    heading: string;
    description: string;
}