import React, { useEffect, useState } from 'react'
import { iconDice, patternDividerDesktop, patternDividerMobile } from '../images'

const API_URL = "https://api.adviceslip.com/advice"

function Quotes() {

    const [advice, setAdvice] = useState(null);

    const displayQuotes = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            setAdvice(data.slip);
        } catch (error) {
            console.error("Error fetching advice:", error); // Add error handling
        }
    }

    useEffect(() => {
        displayQuotes(); // Fetch advice on components
    }, [])

    return(

        <article className='bg-darkGrayishBlue py-[35px] md:py-[45px] px-[10px] md:px-[30px] text-center max-w-[90%] md:max-w-[485px] rounded-[10px] font-manrope relative'>

            <section className='flex flex-col items-center justify-center gap-[20px]'>

                <header>

                    <h1 className='text-neonGreen uppercase text-[10px] md:text-[13px] font-manropeExtraBold tracking-[4.5px]'>{advice ? `advice #${advice.id}` : 'Loading ...'} {/* Conditional Rendering */}</h1>

                </header>

                <div className='flex flex-col items-center justify-center gap-[20px]'>

                    <p className='text-lightCyan text-[22px] md:text-[24px] font-manropeExtraBold'>{advice ? `"${advice.advice}"` : 'Fetching Advice ....'} {/* Conditional Rendering */}</p>

                    <span>

                        <picture>

                            <source media="(min-width: 768px)" srcSet={patternDividerDesktop} />
                            <img src={patternDividerMobile} alt="pattern divider mobile" />

                        </picture>

                    </span>

                </div>

                <footer className='flex items-center justify-center absolute inset-x-0 top-[92%]'>

                    <button onClick={displayQuotes} className='bg-neonGreen w-fit rounded-full p-[15px] relative transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neonGreen focus:ring-opacity-50'>
                        
                        <span className='absolute inset-0 rounded-full bg-neonGreen opacity-0 transition-opacity duration-300 hover:opacity-100 blur-xl'></span>
                        <img src={iconDice} alt="icon dice" className='w-[30px] relative' />

                    </button>

                </footer>

            </section>
            
        </article>
    )
}

export default Quotes