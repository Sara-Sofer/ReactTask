
import React from 'react'

const Tag = (props) => {
    return (
        <button className="text-xs flex items-center justify-between rounded-sm gap-2 text-[rgb(88,134,0)] bg-[#c6e78e] border-[#96d600] border  p-1.5  mr-1  mt-[3px]">
            <div> 
                <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{props.tagDatails.name}</div>
                <div className='overflow-hidden text-ellipsis whitespace-nowrap text-[10px]'>{props.tagDatails.capital}</div>
            </div>
            <span className="font-bold text-[11px]" onClick={props.removeTagFunc}>x</span>
        </button>
    );
}

export default Tag;