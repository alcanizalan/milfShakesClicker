import { StaticImageData } from "next/image";

export interface DropType{
  name: string;
  cost: number;
  autoGain: number;
  active: boolean;
  level: number;
  image: string | StaticImageData
}

export interface BoosterType{
    booster_id: number;
    image: string | StaticImageData;
    active: boolean;
    cost: number;
}