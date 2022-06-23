import {React, useState} from 'react';

import Table from '../../components/common/table/Table';

function BuyFee(props) {
    return (
        <>
            <div className='mb-5'>
                <div className='form-row'>
                    <div className="grid grid-cols-5 gap-4 mt-5">
                        <div className="flex justify-between text-white items-center p-2 mt-2">
                            <select className="flex justify-between text-white items-center bg-[#303F50] p-2 mt-2 width-100" defaultValue={"select"}>
                                <option value="select" disabled>Please Select</option>
                                <option value="hurr">Durr</option>
                            </select>
                        </div>

                        <div className="flex justify-between text-white items-center p-2 mt-2">
                            <select className="flex justify-between text-white items-center bg-[#303F50] p-2 mt-2 width-100" defaultValue={"select"}>
                                <option value="select" disabled>Please Select</option>
                                <option value="hurr">Durr</option>
                            </select>
                        </div>

                        <div className='flex justify-between text-white items-center p-2 mt-2 width-100'>
                            <input type="date" className="bg-[#263240] border border-[#CACACA] rounded-3xl px-3 py-1 text-white w-full" />
                        </div>
                        
                        <div className='flex justify-between text-white items-center p-2 mt-2 width-100'>
                            <input type="date" className="bg-[#263240] border border-[#CACACA] rounded-3xl px-3 py-1 text-white w-full" />
                        </div>

                        <div className="flex justify-between text-white items-center p-2 mt-2 width-100">
                            <button className="px-4 text-white h-10 bg-[#FFC5DD] rounded width-100">Search</button>
                        </div>
                    </div>
                </div>
                <div className='form-row'>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                        <input type="text" placeholder='Please Select' className="text-white items-center bg-[#303F50] p-2 mt-2 w-full text-center" />
                        <input type="text" placeholder='Please Select' className="text-white items-center bg-[#303F50] p-2 mt-2 w-full text-center" />
                    </div>
                </div>
            </div>
        
            <Table
                tHeadData={
                    <tr className="text-left">
                        <th>#</th>
                        <th>Coin Name</th>
                        <th>Quantity</th>
                        <th>Changed Staking Quantity</th>
                    </tr>
                }

                tBodyData={
                    <>
                        <tr>
                            <td>1</td>
                            <td>BTC</td>
                            <td>5,417</td>
                            <td>$ 25,224,417</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>BTC</td>
                            <td>5,417</td>
                            <td>$ 25,224,417</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>BTC</td>
                            <td>5,417</td>
                            <td>$ 25,224,417</td>
                        </tr>
                    </>
                }
            />

            <div className="text-center mt-5">
                <button className="bg-[#263240] rounded text-white text-center py-2 px-4">
                    View More
                </button>
            </div>
        </>
    );
}

export default BuyFee;
