"use client"
import { manufacturers } from '@/constants'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FaCar, FaSearch } from 'react-icons/fa'
import {SearchManufacture} from './'

const SearchBar = () => {

    const [manufacture, setManufacture] = useState("")
    const [model, setModel] = useState("")

    const route = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(manufacture === "" && model === ""){
            return alert("Please fill in the search bar!")
        }

        udpateSearchParams(model.toLowerCase(), manufacture.toLowerCase())
    }


    const udpateSearchParams = (model: string, manufacture: string) => {
        const searchParams = new URLSearchParams(window.location.search);



        if(model){
            searchParams.set('model', model)
        }
        else{
            searchParams.delete('model')
        }

        if(manufacture){
            searchParams.set('manufacture', manufacture)
        }
        else{
            searchParams.delete('manufacture')
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`
        route.push(newPathName)
    }

    return (
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row px-20 h-full gap-2">
            <div className='w-[280px]'>
                <SearchManufacture 
                    manufacture={manufacture}
                    setManufacture = {setManufacture}
                />
            </div>

            <div className="relative w-60">
                <FaCar className='absolute top-2 left-3 h-4 w-4 text-gray-500'/>
                <input 
                    type="text"
                    placeholder='Enter model ...'
                    className='py-1 pl-10 border-2 border-slate-300 shadow-lg'
                    onChange={(e) => setModel(e.target.value)}
                    value={model} 
                />
                <button type='submit'>
                    <FaSearch className='absolute top-3 -right-12 h-4 w-4 text-gray-500'/>
                </button>
            </div>
        </form>
    )
}

export default SearchBar