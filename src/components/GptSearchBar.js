import React from 'react'
import { useSelector } from 'react-redux';
import lang from "../utils/LanguageConstants";

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);

    return (
        <div className='py-[10%] flex justify-center '>
            <form className=' bg-black w-1/2 grid grid-cols-12'>
                <input type="text"
                    className=' p-4 m-4 col-span-9 '
                    placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className=' py-2 px-4 bg-red-700 text-white font-bold rounded-md col-span-3 m-4 '>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar