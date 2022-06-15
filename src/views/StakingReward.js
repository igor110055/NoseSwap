import React from "react";

import Title from './../components/common/title/Title';

import Calculater from './../components/section/calculater/Calculater';
import NewsLetter from './../components/section/NewsLetter';
import Team from './../components/section/Team';
import Clients from "../components/section/Clients";
import Investors from "../components/section/Investors";
import Features from "../components/section/Features";


const StakingReward = () => {
    return (
        <>
            <div className="">

                <Title 
                    title={"Staking Rewards is the central information hub and leading data aggregator for the crypto staking industry."}
                />


                <div className="bg-third py-10">
                    <div className="n-container">
                        <div className="grid grid-cols-2 gap-4 py-10 text-white">
                            <div>
                                <p className="">We provide insights and investment tools for private and institutional investors through unbiased & live staking market data, simplifying portfolio & calculator tools, and deep research analysis about the staking industry.</p>
                                <p className="mt-4" >Our API feed is being used by companies like Coinbase and Bitcoin Suisse. Founded in 2017, we’re the first and most trusted brand in staking.</p>    
                            </div>
                            <div>
                                <p>At Staking Rewards we believe that cryptocurrencies combined with yield-bearing strategies like staking will allow everyone in the world to establish sustainable passive income streams.</p>
                                <p className="mt-4">This is why we’re on a mission to increase transparency, reduce entry-barriers and enable private users to become financially independent.</p>
                            </div>
                        </div>
                        <button className="flex gap-3 h-10 bg-[#F4BC1D] items-center text-white px-5 rounded">Download the press kit <img src="/img/download.png" alt="" className="h-4" /></button>
                    </div>
                </div>

                <div className="bg-secondary py-10">
                    <div className="n-container">
                        <Team />
                    </div>
                </div>

                <div className="bg-third py-10">
                    <div className="n-container">
                        <p className="text-4xl text-white font-bold">Trusted by over <span className="text-[#F4BC1D]">400k users monthly.</span></p>
                        <Clients />
                        <Investors />
                        <Features />
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

export default StakingReward;