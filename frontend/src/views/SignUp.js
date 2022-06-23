import React, {useEffect, useState} from "react";
import { register } from "../actions/auth";
import Title from '../components/common/title/Title';

import { useDispatch, useSelector } from "react-redux";

const SingUp = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("JackySmithH2002@gmail.com");
    const [password, setPassword] = useState("123123123");
    const [confirmpassword, setConfirmPassword] = useState("123123123");
    const [check, setCheck] = useState("");
    const onSignup = () => {
        if (check===false) {
            alert("Checked");
            return;
        }
        if (password!==confirmpassword) {
            alert("Not same password");
            return;
        }
        dispatch(register({email:email, password:password}));
    }
    return (
        <>
            <div className="">

                <Title 
                    title={"Create New Account"}
                />

                <div className="bg-third py-10">
                    <div className="n-container">
                        <div className="max-w-[400px] w-11/12 m-auto text-white">

                            <div>
                                <p>Email Address</p>
                                <input 
                                    type={"email"} 
                                    placeholder="Enter address" 
                                    className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                    defaultValue={email}
                                    onChange={e=>{setEmail(e.target.value)}}
                                />    
                            </div>

                            <div className="mt-5">
                                <p>Password</p>
                                <input 
                                    type={"password"} 
                                    placeholder="Enter password" 
                                    className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                    defaultValue={password}
                                    onChange={e=>{setPassword(e.target.value)}}
                                />
                            </div>

                            <div className="mt-5">
                                <p>Confirm Password</p>
                                <input 
                                    type={"password"} 
                                    placeholder="Enter re-password" 
                                    className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                    defaultValue={confirmpassword}
                                    onChange={e=>{setConfirmPassword(e.target.value)}}
                                />
                            </div>

                            <p className="mt-2 text-sm items-center flex gap-1">
                                <label className="checkbox">
                                    <input type="checkbox" onChange={e => { setCheck(e.target.checked) }} checked/>
                                    <span>I agree to Staking Rewards <span className="text-[#F4BC1D]">Terms of Service</span> & <span className="text-[#F4BC1D]">Privacy Policy</span></span>
                                </label>
                            </p>

                            <button className="w-full bg-[#FFC5DD] text-white mt-5 h-10 rounded" onClick={()=>{onSignup()}}>
                                SIGN UP
                            </button>

                            <div className="mt-5 flex items-center justify-between">
                                <hr className="w-2/5"/>
                                <p className="font-bold">OR</p>
                                <hr className="w-2/5"/>
                            </div>

                            <button className="w-full bg-white rounded flex h-10 justify-center items-center gap-2 mt-5 text-[#8C8C8C] p-2">
                                <img src="/img/google.png" alt="" className="h-8"  />
                                Login in with Google
                            </button>

                            <button className="w-full bg-[#FFC5DD] rounded flex h-10 justify-center items-center text-black gap-2 mt-5 p-2">
                                <img src="/img/talk.png" alt="" className="h-8"  />
                                Login in with Katao Talk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingUp;