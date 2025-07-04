import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export interface Prestation {
  id: number;
  name: string;
  imgurl: string;
  description: string;
  isactive: boolean;
  entrepriseid: number;
}

export interface Product {
  id: number;
  name: string;
  imgurl: string;
  description: string;
}

export interface Employee {
    id: number;
    name: string;
    pictureurl: string;
    description: string;
}

export interface Promo {
    id: number;
    name: string;
    description: string;
    img: string;
    promocode: string;
    promostart: Date;
    promoend: Date;
    url: string;
}

export interface Mea {
    id: number;
    name: string;
    img: string;
    description: string
}

export interface Event {
    id: number;
    name: string;
    img: string;
    description: string;
    event_date: Timestamp;
}

export interface Article {
    id: number;
    title: string;
    img: string;
    content: string;
}
