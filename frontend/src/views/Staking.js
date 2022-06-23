import React, {useEffect, useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Title from '../components/common/title/Title';
import Calculater from '../components/section/calculater/Calculater';
import NewsLetter from '../components/section/NewsLetter';
import PrivacySection from '../components/section/privacySection/PrivacySection';

function Staking() {
    const params = useParams();
    const { symbol } = params;
    const index=0;
    const blockchain = useSelector((state)=>state.blockchain);
    const [staking_amount, setStakingAmount] = useState(0);
    const [staking_days, setStakingDays] = useState(1000);
    
    const [staking_value, setStakingValue] = useState();
    const [staking_fee, setStakingFee] = useState();

    const onChanged = (e) => {
        if (e.target.id==="amount") {
            setStakingAmount(e.target.value);
        }
        else if (e.target.id==="days") {
            setStakingDays(e.target.value);
        }
    }

    useEffect(() => {
        blockchain.smartContract.methods.calcFeeBySimbol(symbol, staking_amount).call().then((res)=>{
            setStakingValue(res.stake_val);
            setStakingFee(res.fee/10000);
        });

    }, [staking_amount])

    const onStake = () => {
        // console.log(index, staking_amount, staking_days);
        // blockchain.smartContract.methods.calcFee(index, staking_amount).call().then((res)=>{
        //     setStakingValue(res.stake_val);
        //     setStakingFee(res.fee/10000);
        // });
    }

    useEffect(() => {
    });

    return (
        <>
            <div className="">

                <Title 
                    title={"This is Staking page for "+symbol+"."}
                    subTitle={
                        <>
                            <p className='text-white text-center'>We’re committed to protecting and respecting your privacy. We use your data to provide and improve the Service only.</p>
                        </>
                    }
                />
                <div className="bg-third py-10">
                    <div className="n-container">
                        <div className="w-10/12 m-auto text-white grid grid-cols-2 gap-10 mt-5">
                            <div>
                                <div className='mb-10'>
                                    <div>
                                        <p>Enter the amount of staking coins(CTC tm)<button className='float-right'>max</button></p>
                                        <input 
                                            type={"text"} 
                                            id={"amount"}
                                            placeholder="Enter the amount" 
                                            className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                            onChange={e=>{onChanged(e)}}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p>Enter the staking times(day)</p>
                                    <select className="flex justify-between text-white items-center bg-[#303F50] p-2 mt-2 width-100" id={"days"} defaultValue={"1000"} onChange={e=>{onChanged(e)}}>
                                        <option value="1000">1000</option>
                                        <option value="2000">2000</option>
                                        <option value="3000">3000</option>
                                        <option value="4000">4000</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className='mb-10'>
                                    <p>Number of coins to be converted</p>
                                    <input 
                                        type={"text"} 
                                        placeholder="Staking value" 
                                        className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                        value={staking_value}
                                        readOnly
                                    />
                                </div>

                                <div>
                                    <p>Total Fee</p>
                                    <input 
                                        type={"text"} 
                                        placeholder="Fee value" 
                                        className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                        value={staking_fee}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div>
                                <button className="bg-[#FFC5DD] rounded px-3 py-1 font-bold text-dark float-right w-100" onClick={()=>{onStake()}}>Stake</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Staking;