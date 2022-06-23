import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Table from './../common/table/Table';
import { connect } from "../../actions/blockchain";

const StakingProviders = () => {
    const dispatch = useDispatch();
    const [currentNav, setCurrentNav] = useState("Staking Provider");
    const blockchain = useSelector((state)=>state.blockchain);
    const [coins, setCoins] = useState([]);

    // const coins = [
    //     {name:"Ethereum", symbol:"ETH", address:"", chain:"EthereumChain", staked_value:0, users: 0, country: "USA"},
    //     // {name:"XRP", address:"", chain:"EthereumChain"},
    //     // {name:"TRX", address:"", chain:"EthereumChain"},
    //     {name:"USD token", symbol:"USDT", address:"0x55d398326f99059ff775485246999027b3197955", chain:"TetherChain", staked_value:0, users: 0, country: "USA"},
    //     {name:"Binance coin", symbol:"BNB", address:"", chain:"BNBChain", staked_value:0, users: 0, country: "USA"},
    //     // {name:"BNB(Smart Chain)", address:"", chain:"BNBSmartChain"},
    //     // {name:"BNB(Beacon Chain)", address:"", chain:"BNBBeaconChain"},
    //     // {name:"CTC", address:"0x00B7db6B4431e345eee5cc23D21E8dbC1d5cADA3", chain: "CyberTronChain"},
    //     // {name:"TP3", address:"0x9F76Ff3336597FeAB30f5A66a053ae4A4a7eBe13", chain: "Token Play"},
    //     // {name:"MC", address:"0x3F013B600D31557f551131614f439e0c292dFd90", chain: "Market Coin"},
    //     // {name:"CTG", address:"0x6619D058a894fabD08BFC5e0BfAC08A767B49313", chain: "CyberTronChain"},
    //     {name:"CTC token", symbol:"CTC(TM)", address:"0xF59Af0c74d3148247339c479bEF4261c3645c73f", chain: "CyberTronChain", staked_value:0, users: 0, country: "USA"},
    // ]

    const nav = [
        {type: "Staking Provider"},
        {type: "Wallets"},
    ]

    const navigate = useNavigate();

    const onClickStake = (index) => {
        coins[index].index=index;
        console.log(coins[index]);
        navigate('/staking', {state: coins[index]});
    }

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            const length=0;
            const tcoins=[];
            // blockchain.smartContract.methods.coinslength().call().then((len)=>{length=len});
            for (var i=0;i<4;i++) {
                blockchain.smartContract.methods.coinsInfo(i).call().then((coin)=>{
                    console.log("step by step");
                    tcoins.push(coin);
                    if (tcoins.length===4)
                        setCoins(tcoins);
                });
            }
            console.log("virtually finished");
        }
    };

    useEffect(() => {
        console.log("----------------Connected-----------------");
        getData();
    }, []);

    console.log(coins.length);

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
                            {
                            coins.map((coin, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">{index+1}</td>
                                        <td className="flex items-center gap-2">
                                            <img src="img/eth.png" alt="eth" />
                                            <div>
                                                <p>{coin.name}</p>
                                                <p className="text-secondary">{coin.symbol}</p>
                                            </div>
                                        </td>
                                        <td>{coin.staked_value}</td>
                                        <td>{coin.users}</td>
                                        <td><img src="/img/linkedin_blue.png"/></td>
                                        <td className="text-center">
                                            <button className="bg-[#FFC5DD] rounded px-3 py-1 font-bold text-dark" onClick={()=>{onClickStake(index)}}>Stake Now</button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
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