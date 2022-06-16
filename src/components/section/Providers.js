import React, { useState } from "react";

import Table from './../common/table/Table';

const StakingProviders = () => {

    const [currentNav, setCurrentNav] = useState("Staking Provider");

    const nav = [
        {type: "Staking Provider"},
        {type: "Wallets"},
    ]
    
    return (
        <>
            <div className="cryptoAsset">
                <div className="py-10">
                    <div className="text-sm font-medium text-center text-white border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul className="flex flex-wrap mb-5 justify-center">
                            {
                                nav.map((row) => {
                                    return (
                                        <li className="mr-2 w-100" key={row.type}>
                                            <a 
                                                onClick={() => setCurrentNav(row.type)}
                                                href="#" 
                                                className={`${ currentNav === row.type ? 'border-b-2 border-[#F4BC1D]' : '' } inline-block p-4 rounded-t-lg hover:border-[#F4BC1D] dark:hover:text-gray-300`}
                                            >
                                                {row.type}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <Table

                        tHeadData={
                            <tr className="text-left">
                                <th className="text-center">#</th>
                                <th>Provider</th>
                                <th>Staked Value</th>
                                <th>Users</th>
                                <th>Country</th>
                                <th className="text-center">Stake Now</th>
                            </tr>
                        }

                        tBodyData={
                            <>
                                <tr>
                                    <td className="text-center">1</td>
                                    <td className="flex items-center gap-2">
                                        <img src="img/eth.png" alt="eth" />
                                        <div>
                                            <p>Ethereum 2.0</p>
                                            <p className="text-secondary">ETH</p>
                                        </div>
                                    </td>
                                    <td>$25,224,417</td>
                                    <td>5417</td>
                                    <td><img src="/img/linkedin_blue.png"/></td>
                                    <td className="text-center">
                                        <button className="bg-[#FFC5DD] rounded px-3 py-1 font-bold text-dark">Stake Now</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">2</td>
                                    <td className="flex items-center gap-2">
                                        <img src="img/eth.png" alt="eth" />
                                        <div>
                                            <p>Ethereum 2.0</p>
                                            <p className="text-secondary">ETH</p>
                                        </div>
                                    </td>
                                    <td>$25,224,417</td>
                                    <td>5417</td>
                                    <td><img src="/img/linkedin_blue.png"/></td>
                                    <td className="text-center">
                                        <button className="bg-[#FFC5DD] rounded px-3 py-1 font-bold text-dark">Stake Now</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center">3</td>
                                    <td className="flex items-center gap-2">
                                        <img src="img/eth.png" alt="eth" />
                                        <div>
                                            <p>Ethereum 2.0</p>
                                            <p className="text-secondary">ETH</p>
                                        </div>
                                    </td>
                                    <td>$25,224,417</td>
                                    <td>5417</td>
                                    <td><img src="/img/linkedin_blue.png"/></td>
                                    <td className="text-center">
                                        <button className="bg-[#FFC5DD] rounded px-3 py-1 font-bold text-dark">Stake Now</button>
                                    </td>
                                </tr>
                            </>
                        }
                    />

                    <div className="text-center mt-5">
                        <button className="bg-[#263240] rounded text-white text-center py-2 px-4">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </> 

    )
}

export default StakingProviders;