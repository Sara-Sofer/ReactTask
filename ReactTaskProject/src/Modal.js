import React, { useState, useRef } from 'react'
import Tag from './Tag';
import "./style.css"

function Modal() {
//Modal ->ChipsInput  Chip    vvvvvvvvvvvvv
    const [arrTags, setArrTags] = useState([]);
    const inputRef = useRef(null);
    const MAX_CHIPS = 5;

    const addTag = () => {
        const inputValue = inputRef.current.value.trim();
        if (arrTags.length < MAX_CHIPS && inputValue !== '') {
            setArrTags((prevTags) => [...prevTags, inputValue]);
            inputRef.current.value = '';
        }
    }

    const removeTag = (index) => {
        setArrTags((prevTags) => prevTags.filter((_, i) => i !== index));
    }

    return (
        <div className="modal h-72 w-1/3 mx-auto my-auto flex justify-center items-center" >
            <div className="modal-content">
                <div className="border-[#cccccc] rounded w-96 h-14 font-medium wrapper flex my-auto bg-white p-2 border-solid border">
                    {arrTags.map((item, index) => (
                        <Tag key={index} tagName={item} removeTagFunc={() => removeTag(index)} />
                     ))}
                    <input 
                       type="text" 
                       placeholder='Add a tag' 
                       className={`text-[#bbbbbb] border-0 outline-none input text-sm pl-[10px] ${arrTags.length >= MAX_CHIPS ? 'cursor-not-allowed' : ''}`}
                       ref={inputRef}
                       disabled={arrTags.length >= MAX_CHIPS}
                       />
                </div>
                <button className="save bg-[#fd3824] bg-red-600 text-white font-bold w-[77px] text-sm h-8 rounded-sm float-right	mt-[10px]" onClick={addTag}>Save</button>
            </div>
        </div>
    );
}


export default Modal;

