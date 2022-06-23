import {React, useState} from 'react';

import Title from './../components/common/title/Title';
import BuyFee from './wallet/buyfee';

function MyWallet(props) {
    const [currentNav, setCurrentNav] = useState("Buy Fee");

    const nav = [
        {type: "Buy Fee"},
        {type: "Sell Fee"},
        {type: "History invoice"},
        {type: "Withdrawal Fees"},
    ]

    return (
        <>
            <div className="">

                <Title 
                    title={"Trusted Data. Stakeable Assets."}
                />
                
                <div className="bg-third">
                    <div className="n-container">
                        <div className="py-10">
                    
                            <div className="text-sm font-medium text-center text-white border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                <ul className="flex flex-wrap mb-5 justify-center">
                                    {
                                        nav.map((nav) => {
                                            return (
                                                <li className="mr-2 w-100" key={nav.type}>
                                                    <a 
                                                        onClick={() => setCurrentNav(nav.type)}
                                                        href="#" 
                                                        className={`${ currentNav === nav.type ? 'border-b-2 border-[#F4BC1D]' : '' } inline-block p-4 rounded-t-lg hover:border-[#F4BC1D] dark:hover:text-gray-300`}
                                                    >
                                                        {nav.type}
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <BuyFee />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyWallet;
