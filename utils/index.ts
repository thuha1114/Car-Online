import { FilterProps } from './../types/index';
import { CarProps } from "@/types";

export async function fetchCars(filters: FilterProps){
    
    const {manufacture, year, model, limit, fuel} = filters
    
    const headers = {
		'x-rapidapi-key': '8a65448390mshac816f5b2a8c3b0p1679b3jsn18884d32121b',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacture}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
        headers: headers,
    });

    const result = await response.json()
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDate = 50
    const mileageFactor = 0.1
    const ageFactor = 0.05

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDate + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}

export const updateSearchParams = (type: string, value: string) => {

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value)
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    return newPathname;
  }