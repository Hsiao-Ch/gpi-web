import { StaticImageData } from 'next/image';

export interface ProductsType {
    spx: List[];
    spirptech: List[];
    lakos: List[];
    walraven: List[];
}

export type List = {
    image: StaticImageData;
    alt: string;
    link: string;
}