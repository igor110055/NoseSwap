import React from "react";

import './Title.css'

const Title = ({title, subTitle}) => {


    return (
        <>
            <div className="bg-third header-bg">
                <div className="title">
                    <div className="n-container">
                        <h1 className="text-center text-5xl font-bold text-white pt-10 pb-8">{title}</h1>

                        <div className="max-w-[80%] m-auto pb-10">
                            {subTitle}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title;