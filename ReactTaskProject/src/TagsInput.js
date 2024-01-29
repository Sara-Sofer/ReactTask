import React, { useState } from 'react'
import Tag from './Tag';
import countries from './mocks/countries'

const TagsInput = () => {
    const [arrTags, setArrTags] = useState([]);
    const [currentSuggestion, setCurrentSuggestion] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const MAX_TAGS = 5;

    const addTag = () => {
        if (currentSuggestion != null) {
            if (arrTags.length < MAX_TAGS) {
                setArrTags([...arrTags, currentSuggestion]);
                setCurrentSuggestion(null);
                setInputValue('');
            }
        }
    }

    const removeTag = (index) => {
        setArrTags(arrTags.filter((_, i) => i !== index));
    }

    const handleInputChange = (e) => {
        const filteredSuggestions = countries.filter((suggestion) =>
            suggestion.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setInputValue(e.target.value)
    }

    const handleSuggestionClick = (suggestion) => {
        setCurrentSuggestion(suggestion);
        setInputValue(suggestion.name)
        setSuggestions([]);
    };

    return (
        <div className="flex justify-center items-center mx-auto my-auto h-72 w-1/3" >
            <div className="tags-input-content">
                <div className="font-medium flex rounded bg-white border border-[#cccccc] p-2 w-[38rem] h-14">
                    {arrTags.map((country, index) => (
                        <Tag key={index} tagDatails={country} removeTagFunc={() => removeTag(index)} />
                    ))}
                    <input
                        type="text"
                        placeholder='Add a tag'
                        className={`border-0 w-full bg-white outline-none text-sm pl-[10px] ${arrTags.length >= MAX_TAGS ? 'cursor-not-allowed' : ''}`}
                        disabled={arrTags.length >= MAX_TAGS}
                        onChange={handleInputChange}
                        value={inputValue}
                    />
                </div>

                {inputValue && !currentSuggestion && suggestions.length === 0 && (
                    <div className='absolute text-left rounded border border-[#cccccc] bg-[#f8f8f8] mt-[1px] p-1 w-[38rem]'>
                        No search results
                    </div>
                )}
                
                {suggestions.length > 0 && (
                    <ul className='absolute overflow-auto max-h-[240px] text-left rounded border border-[#cccccc] bg-[#f8f8f8] mt-[1px] w-[38rem]'>
                        {suggestions.map((suggestion, index) => (
                            <li key={index} onClick={() => handleSuggestionClick(suggestion)} className='p-0.5 ml-[8px]'>
                                <div className='text-sm'>{suggestion.name}</div><div className='text-xs text-[#cccccc]'>{suggestion.capital}</div>
                            </li>
                        ))}
                    </ul>
                )}
                <button className="rounded-sm float-right text-sm font-bold bg-[#fd3824] text-white w-[77px] h-8 mt-[10px]" onClick={addTag}>Save</button>
            </div>
        </div>
    );
}


export default TagsInput;

