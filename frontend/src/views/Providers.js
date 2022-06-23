import React from 'react';

import Title from '../components/common/title/Title';
import StakingProviders from '../components/section/Providers';

function Providers(props) {
    return (
        <>
            <div className="">

                <Title 
                    title={"218Staking Providers We Love."}
                    subTitle={<>
                        <p className='text-white text-center'>Are you looking to stake more than $500k?</p>
                    </>}
                />
                
                <div className="bg-third">
                    <div className="n-container">
                        <StakingProviders />
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Providers;
