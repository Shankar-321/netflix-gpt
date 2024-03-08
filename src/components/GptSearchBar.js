import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import lang from "../utils/LanguageConstants";
import openai from '../utils/openai';

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);

    const searchText = useRef(null);

    const handleGptSearchClick = async () => {
        // console.log(searchText.current.value);

        // Make API call to GPT and get results of Movies

        const gptQuery = "Act as a Movie Recommendation System and suggest some Movies for the query: " +
            searchText.current.value +
            "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: seven, zodiac, the killer, Don't Breathe, The Call";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices);
    };
    return (
        <div className='py-[10%] flex justify-center '>
            <form
                className=' bg-black w-1/2 grid grid-cols-12'
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className=' p-4 m-4 col-span-9 '
                    placeholder={lang[langKey].gptSearchPlaceholder} />
                <button
                    className=' py-2 px-4 bg-red-700 text-white font-bold rounded-md col-span-3 m-4 '
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar