import { manufacturers } from './../constants/index';
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyles? : string,
    handleClick?:
    MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit"
    isDisabled?: boolean,
}

export interface OptionsProps{
    title: string;
    value: string;
}

export interface CustomFilterProps{
    title:string,
    options: OptionsProps[];
}

export interface SearchManufactureProps{
    manufacture: string,
    setManufacture: (manufacturer: string) => void,
}

export interface CarProps {
    city_mpg: number,
    class: string,
    combination_mpg:number,
    cylinders:number,
    displacement:number,
    drive: string,
    fuel_type:string,
    highway_mpg:number,
    make: string,
    model:string,
    transmission:string,
    year:number,
}

export interface FilterProps {
    manufacture: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}

export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
}