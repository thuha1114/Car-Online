import {Hero, CustomFilter, SearchBar, CarCard, CarDetails, ShowMore} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

export default async function Home({searchParams}) {

  const allCars = await fetchCars({
    manufacture: searchParams.manufacture || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  const isDataEmpty = allCars.length < 1 || !Array.isArray(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div id="discover" className="w-full">

        <div className="px-20 text-slate-700">
          <div className='font-bold text-2xl md:text-2xl sm:text-2xl'>Car Catalogue</div>
          <p className='font-raleway text-sm md:text-base sm:text-sm py-2'>Explore the cars you might like.</p>
        </div>

        <div className="pt-3 pb-5">
          <SearchBar />
          <div className="flex mt-3 px-20">
            <CustomFilter title="fuel" options = {fuels}/>
            <CustomFilter title="year" options = {yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <div>

            <div className="px-20 grid sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8"> 
              {allCars.map(item => (
                <CarCard car={item} />
              ))}
            </div>
            <ShowMore 
              pageNumber={(searchParams.limit || 10) /10}
              isNext = {(searchParams.limit || 10) > allCars.length}
            />
          </div>
        ) : (
          <div className="px-20 font-bold text-red-500 pb-10 text-lg">There's nothing!</div>
        )}

      </div>
    </main>
  );
}
