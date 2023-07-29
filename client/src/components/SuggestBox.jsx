import React, { useState } from 'react';
import './SuggestBox.css';
import { UserAuth } from '../context/AuthContext';
import axios from 'axios';

function SuggestBox(props) {
    const { requestId, allSuggestions, setAllSuggestions } = props;
    const { user } = UserAuth();
    const [userId, setUserId] = useState();
    const [suggestContent, setSuggestContent] = useState('');
    const [boolean, setBoolean] = useState(false);
    const [postedSuggestion, isSubmitted] = useState();


    const handleSuggestButton = async(e) => {
        e.preventDefault();
        const userIdData = await axios.get(`/api/user/${user.email}`);
        const userId = userIdData.data[0].id;
        setUserId(userId);

        const postedSuggestion = {
            user_id: userId,
            request_id: requestId,
            best_answer: boolean,
            suggestion: suggestContent
        }
        console.log('💓', postedSuggestion);
        isSubmitted(postedSuggestion);

        setAllSuggestions([postedSuggestion, ...allSuggestions])
        await axios.post('/api/translation-suggest', postedSuggestion);
        setSuggestContent('');
    }

    const handleSuggest = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setSuggestContent(value);
    }


    return (
    <div className='suggest-box-container'>
        <h3>What’s your translation suggestion?</h3>
        <textarea
            name='request-form'
            type='text'
            rows='3'
            placeholder='I would traslate...'
            value={suggestContent}
            onChange={handleSuggest}
        >
        </textarea>
        <div className='button-area'>
        <button 
        className='suggestion-button'
        onClick={handleSuggestButton}
        >Suggest</button>
        </div>

        {
            allSuggestions.map((suggestion, index) => {
                return (
                    <div className='suggestion-box' key={index}>
                        <div className='upper-part'>
                            <div className='basic-info'>
                                <h3>username: {suggestion.username}</h3>
                            </div>
                        </div>

                        <div className='content'>
                            <p>{suggestion.suggestion}</p>
                        </div>

                    </div>
                )
            })
        }
    
    
    </div>
  )
}

export default SuggestBox