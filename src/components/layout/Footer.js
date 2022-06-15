import React from "react";

import './footer.css';

const Footer = () => {

    return (
        <>
            <div className="footer bg-primary" >
                <div className="n-container">
                    <div className="py-20 sm:flex justify-between gap-5">
                        <div>
                            <div className="flex items-center gap-2">
                                <img src="/img/logo.svg" alt="logo" className="h-12 sm:h-16" />
                                <div>
                                    <p className="text-white fontweight-semibold text-4xl tracking-widest font-black fontfamily-poppins">Nose Swap</p>
                                    {/* <p className="text-[#F29D20] tracking-tighter text-xs border-t-2 border-[#F29D20] font-medium">JUST THE RIGHT AMOUNT OF EVERYTHING</p> */}
                                </div>
                            </div>
                            <p className="footer_text max-w-[300px] mt-5">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry.</p>
                        </div>

                        <div className="mt-3">
                            <h1 className="footer_title">Quick Links</h1>
                            <hr class="solid"/>
                            <div className="mt-5">
                                <p className="footer_text">- Home</p>
                                <p className="footer_text">- Swap</p>
                                <p className="footer_text">- Liquidity</p>
                                <p className="footer_text">- Farms</p>
                                <p className="footer_text">- Pools</p>
                            </div>
                        </div>

                        <div className="mt-3">
                            <h1 className="footer_title">Help</h1>
                            <hr class="solid"/>
                            <div className="mt-5">
                                <p className="footer_text">- Support</p>
                                <p className="footer_text">- Teams & Conditions</p>
                                <p className="footer_text">- Privacy Policy</p>
                            </div>
                        </div>

                        <div className="mt-3">
                            <h1 className="footer_title">Newsletter</h1>
                            <hr class="solid"/>
                            <div className="mt-5">
                                <p className="footer_text">Duis aute irure dolor in reprehen derit in velit.</p>
                            </div>
                            
                            <div className="flex items-center mt-5">
                                <input 
                                    type="text" 
                                    className="bg-[#263240] border border-[#CACACA] rounded-3xl px-3 py-1 text-white w-full" 
                                    placeholder="Enter email address" 
                                />

                                <img src="/img/mail.png" style={{marginLeft: "-40px"}} alt="" />
                            </div>

                        </div>
                    </div>

                    <div className="border-t border-white py-4 sm:flex justify-between items-center">
                        <p className=" text-white">Copyright © 2022 Company Name. All Right Reserved</p>

                        <div className="flex gap-2 justify-center">
                            <img src="/img/discord.png" alt="" />
                            <img src="/img/facebook.png" alt="" />
                            <img src="/img/twitter.png" alt="" />
                            <img src="/img/instagram.png" alt="" />
                        </div>

                    </div>
                
                </div>
            </div>        
        </>
    )
}

export default Footer;