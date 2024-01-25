
import React from 'react'

function Tag(props) {
    return (
        <button className="text-xs flex items-center justify-between rounded-sm text-[#588600] bg-[#c6e78e] border-[#96d600] border min-w-12 p-1.5 w-12 mr-1 h-7 mt-[3px]">
            <span className='overflow-hidden text-ellipsis whitespace-nowrap'>{props.tagName}</span>
            <span className="font-bold text-[11px]" onClick={props.removeTagFunc}>x</span>
        </button>
    );
}

export default Tag;