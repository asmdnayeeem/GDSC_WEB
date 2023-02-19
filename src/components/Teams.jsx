import React from 'react';
import { leads } from '../assests/teams';
import { team } from '../assests/teams';
const Teams = () => {
    return (
        <div className='flex justify-center flex-col relative top-20 items-center '>
            <h1 className="text-black font-bold text-2xl">Team Board of 2023</h1>
            <div className='flex justify-center items-center mt-5'>
                {
                    leads.map((item) => {
                        return(<div>
                            <div className="text-black font-semibold text-xl top-4 text-center mt-4">{item.title}</div>
                            <div>
                            <div className=" grid grid-cols-2 grid-rows-2 gap-9 justify-between mt-4 min-[610px]:grid-cols-3">
                                {item.leads.map((lead) => {
                                    return(
                                       
                                        <div className="flex flex-col justify-center items-center w-30 h-30">
                                            <div ><img className="w-14 h-14 box-border  bg-white p-1.5 rounded-full shadow-xl" src={lead.image} alt="" /></div>
                                            <div className="pt-2 break-all">{lead.title}</div>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                             )
                    })
                }
            </div>
            <div className='flex justify-center items-center mt-5'>
                {
                    team.map((item) => {
                        return(<div>
                            <div className="text-black font-semibold text-xl top-4 text-center mt-4">{item.title}</div>
                            <div>
                            <div className="grid grid-cols-2 grid-rows-2 gap-9 justify-between mt-4 min-[610px]:grid-cols-3">
                                {item.members.map((member) => {
                                    return(
                                       
                                        <div className="flex flex-col justify-center items-center">
                                            <div ><img className="w-14 h-14 box-border  bg-white p-1.5 rounded-full shadow-xl" src={member.image} alt="" /></div>
                                            <div className="pt-2">{member.name}</div>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                             )
                    })
                }
            </div>
            
        </div>
    )
}

export default Teams;
