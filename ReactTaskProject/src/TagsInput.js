import React, { useState, useRef } from 'react'
import Tag from './Tag';

function TagsInput() {
    const [arrTags, setArrTags] = useState([]);
    const inputRef = useRef(null);
    const MAX_TAGS = 5;

    const addTag = () => {
        const inputValue = inputRef.current.value.trim();
        if (arrTags.length < MAX_TAGS && inputValue !== '') {
            setArrTags((prevTags) => [...prevTags, inputValue]);
            inputRef.current.value = '';
        }
    }

    const removeTag = (index) => {
        setArrTags((prevTags) => prevTags.filter((_, i) => i !== index));
    }

    return (
        <div className="flex justify-center items-center mx-auto my-auto h-72 w-1/3" >
            <div className="tags-input-content">
                <div className="font-medium flex rounded bg-white border border-[#cccccc] p-2 w-96 h-14">
                    {arrTags.map((item, index) => (
                        <Tag key={index} tagName={item} removeTagFunc={() => removeTag(index)} />
                    ))}
                    <input
                        type="text"
                        placeholder='Add a tag'
                        className={`border-0 w-full bg-white outline-none text-sm pl-[10px] ${arrTags.length >= MAX_TAGS ? 'cursor-not-allowed' : ''}`}
                        ref={inputRef}
                        disabled={arrTags.length >= MAX_TAGS}
                    />
                </div>
                <button className="rounded-sm float-right text-sm font-bold bg-[#fd3824] text-white w-[77px] h-8 mt-[10px]" onClick={addTag}>Save</button>
            </div>
        </div>
    );
}


export default TagsInput;

