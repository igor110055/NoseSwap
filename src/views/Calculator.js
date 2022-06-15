import React from 'react';

import Title from '../components/common/title/Title';

import AdvancedCalculator from '../components/section/AdvancedCalculator';
import NewsLetter from '../components/section/NewsLetter';


function Caculator(props) {
    return (
        <>
            <div className="">

                <Title 
                    title={"Calculate Your Earnings."}
                />
                
                <div className="bg-third py-10">
                    <div className="n-container">
                        <AdvancedCalculator />
                    </div>
                </div>

                <div className="bg-third py-10">
                    <div className="n-container">
                        <NewsLetter />
                        <div className="mt-10">
                            <img src="/img/banner.png" alt="" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Caculator;
