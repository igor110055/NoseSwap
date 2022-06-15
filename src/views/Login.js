import React from "react";

import Title from '../components/common/title/Title';



const Login = () => {
    return (
        <>
            <div className="">

                <Title 
                    title={"Login"}
                />

                <div className="bg-third py-10">
                    <div className="n-container">
                        <div className="max-w-[400px] w-11/12 m-auto text-white">
                            
                            <div>
                                <p>Email</p>
                                <input 
                                    type={"text"} 
                                    placeholder="Enter email" 
                                    className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                />    
                            </div>
                            
                            <div className="mt-5">
                                <p>Password</p>
                                <input 
                                    type={"password"} 
                                    placeholder="Enter password" 
                                    className="py-2 px-4 w-full bg-[#24303E] mt-2 rounded" 
                                />
                            </div>

                            <div className="flex justify-between mt-5">
                                <p className="text-sm items-center flex gap-1"><input type={"checkbox"} /> Remember Me</p> 
                                <p className="text-sm text-[#FFC5DD]">Forgot Password?</p>
                            </div>

                            <button className="w-full bg-[#FFC5DD] text-white mt-5 h-10 rounded">
                                LOGIN
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

                            <p className="text-white text-center mt-5">Don't have a account? <span className="text-[#F4BC1D]">Sign Up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;