import React from 'react';

import Title from '../components/common/title/Title';
import Calculater from '../components/section/calculater/Calculater';
import NewsLetter from '../components/section/NewsLetter';
import PrivacySection from '../components/section/privacySection/PrivacySection';

function Privacy(props) {
    return (
        <>
            <div className="">

                <Title 
                    title={"Privacy and Cookie Policy."}
                    subTitle={
                        <>
                            <p className='text-white text-center'>Finrate AG (“us”, “we”, or “our”) operates the https://stakingrewards.com website (the “Service”).</p>
                            <p className='text-white text-center'>We’re committed to protecting and respecting your privacy. We use your data to provide and improve the Service only.</p>
                        </>
                    }
                />
                
                <div className="bg-third">
                    <div className="n-container">
                        <PrivacySection />
                    </div>
                </div>

                <div className="bg-primary py-10">
                    <div className="n-container">
                        <Calculater />
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

export default Privacy;