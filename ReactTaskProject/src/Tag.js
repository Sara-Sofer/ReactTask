
import React from 'react'
import "./style.css"


function Tag(props) {
    return (
        <button className="text-xs w-12 mr-1 h-7 rounded mt-[3px] tag text-[#588600] bg-[#c6e78e] border-[#96d600] border-solid border">
            <span className='ff'>{props.tagName}</span>
             <span className="ml-0.5 font-bold text-[11px]" onClick={props.removeTagFunc}>x</span>
        </button>

    );
}

export default Tag;