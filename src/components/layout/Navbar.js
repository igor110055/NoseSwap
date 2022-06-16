import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [isShow, toggleModal] = useState(false);

    return (
        <>
            <div className="bg-[#171E26] py-3 z-20 border-b" >
                <div className="n-container">
                    <div className="flex justify-between items-center">
                        <Link to={"/"}>
                            <div className="flex items-center gap-5">
                                    <img src="/img/logo.svg" alt="logo" className="h-12 sm:h-16" />
                                    <div>
                                        <p className="text-white fontweight-semibold text-4xl tracking-widest font-black fontfamily-poppins">Nose Swap</p>
                                        {/* <p className="text-[#F29D20] tracking-tighter text-xs border-t-2 border-[#F29D20] font-medium">JUST THE RIGHT AMOUNT OF EVERYTHING</p> */}
                                    </div>
                            </div>
                        </Link>

                        <div className="hidden sm:flex text-white gap-5">
                            <Link to="/providers"><p>Staking Providers</p></Link>
                            <Link to="/mywallet"><p>My Wallet</p></Link>
                            <p>Journal</p>
                        </div>

                        <div className="hidden sm:flex gap-5">
                            <Link to={"search"}><button className="border border-white h-10 px-2 rounded"><img src='/img/search.png' /></button></Link>
                            <Link to={"signup"}><button className="border border-white h-10 px-2 text-white rounded">Sign Up</button></Link>
                            <Link to={"login"}><button className="px-4 text-white h-10 bg-[#FFC5DD] rounded">Login</button></Link>
                        </div>

                        {/* <p className="none sm:hidden text-white pointer" onClick={() => toggleModal(true)} >&#9776;</p> */}
                    </div>
                </div>
                    
                <div className={` ${ isShow ? "" : "hidden" } bg-secondary absolute left-0 top-0 h-screen w-full`}>
                    <p className="none sm:hidden text-white text-right pointer m-5 mt-6" onClick={() => toggleModal(false)} >&#9776;</p>

                    <div className='text-white text-center mt-12'>
                        <p className='mt-3'>SR20</p>
                        <p className='mt-3'>Crypto Assets</p>
                        <p className='mt-3'>Crypto Assets</p>
                        <p className='mt-3'>Caculator</p>
                        <p className='mt-3'>Journal</p>
                    </div>

                    <div className="flex justify-center gap-4 mt-10">
                        <button className="py-1 px-4 text-white bg-[#F4BC1D] rounded">Login</button>
                        <button className="border border-white py-2 px-2 text-white rounded">Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;