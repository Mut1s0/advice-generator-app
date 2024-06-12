import React from 'react'
import { iconDice, patternDividerDesktop, patternDividerMobile } from '../images'

function Quotes() {

    return(

        <article className='bg-darkGrayishBlue py-[35px] md:py-[45px] px-[10px] md:px-[30px] text-center max-w-[90%] md:max-w-[485px] rounded-[10px] font-manrope relative'>

            <section className='flex flex-col items-center justify-center gap-[20px]'>

                <header>

                    <h1 className='text-neonGreen uppercase text-[10px] md:text-[13px] font-manropeExtraBold tracking-[4.5px]'>advice #117</h1>

                </header>

                <div className='flex flex-col items-center justify-center gap-[20px]'>

                    <p className='text-lightCyan text-[22px] md:text-[24px] font-manropeExtraBold'>"It is easy to sit up and take notice, what's up difficult is getting up and taking action."</p>

                    <span>

                        <picture>

                            <source media="(min-width: 768px)" srcSet={patternDividerDesktop} />
                            <img src={patternDividerMobile} alt="pattern divider mobile" />

                        </picture>

                    </span>

                </div>

                <footer className='flex items-center justify-center absolute inset-x-0 top-[92%]'>

                    <div className='bg-neonGreen w-fit rounded-full p-[15px] relative transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neonGreen focus:ring-opacity-50'>
                        
                        <span className='absolute inset-0 rounded-full bg-neonGreen opacity-0 transition-opacity duration-300 hover:opacity-100 blur-xl'></span>
                        <img src={iconDice} alt="icon dice" className='w-[30px] relative' />

                    </div>

                </footer>

            </section>
            
        </article>
    )
}

export default Quotes