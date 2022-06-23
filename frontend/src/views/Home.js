import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Title from './../components/common/title/Title';
import CryptoAsset from './../components/section/cryptoAsset/CryptoAsset';
import LendingProviders from './../components/section/lendingProviders/LendingProviders';
import StakingProviders from './../components/section/stakingProviders/StakingProviders';
import Calculater from './../components/section/calculater/Calculater';
import NewsLetter from './../components/section/NewsLetter';


const Home = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
    useEffect (()=>{
        console.log(isAuthenticated);
        if (isAuthenticated===false) {
            navigate("/login");
        }
    },[])
    return (
        <>
            <div className="">

                <Title 
                    title={"Earn Passive Income With Crypto"}
                    subTitle={
                        <p className="text-white text-center">
                            Staking Rewards is the leading data provider for staking and crypto-growth tools. We are currently tracking
                            <span className="text-[#F4BC1D]"> 215 </span> yield-bearing assets with an average interest rate of <span className="text-[#F4BC1D]">10.46%</span> and <span className="text-[#F4BC1D]">48801</span> providers.
                        </p>
                    }
                />

                <div className="bg-third">
                    <div className="n-container">
                        <CryptoAsset />

                        <div className="mt-10 pb-10">
                            <div className="grid grid-cols-2 gap-4 ">
                                <LendingProviders />
                                <StakingProviders />
                            </div>
                            <div className="flex justify-between">
                                <p className="text-[#F29D20] mt-3">View More &#8594;</p>
                                <p className="text-[#F29D20] mt-3">Learn about ETH</p>
                            </div>
                        </div>
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
    )
}

export default Home;