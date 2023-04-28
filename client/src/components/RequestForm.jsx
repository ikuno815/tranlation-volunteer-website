import React, { useState } from 'react'
import axios from 'axios';
import { UserAuth } from '../context/AuthContext';
import './RequestForm.css';

function RequestForm(props) {
  const { setDisplayedRequests, displayedRequests } = props;

  const { user } = UserAuth();
  const [userId, setUserId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [orgLangId, setOrgLangId] = useState();
  const [tranLangId, setTranLangId] = useState();
  const [requestContent, setRequestContent] = useState('');

  const handleCategories = (e) => {
    e.preventDefault();
    const categoryId = Number(e.target.value);
    setCategoryId(categoryId);
  }

  const handleOrgLangId = (e) => {
    e.preventDefault();
    const orgLangId = Number(e.target.value);
    setOrgLangId(orgLangId);
  }

  const handleTranLangId = (e) => {
    e.preventDefault();
    const tranLangId = Number(e.target.value);
    setTranLangId(tranLangId);
  }

  const handleRequest = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setRequestContent(value);
  }

  const handleUserId = async(e) => {
    e.preventDefault();
    const userIdData = await axios
        .get(`/api/user/${user.email}`);
    const userId = userIdData.data[0].id;
    setUserId(userId);
  
    
    const payload = {
      user_id: userId,
      categories_id: categoryId,
      original_language_id: orgLangId,
      translated_language_id: tranLangId,
      request: requestContent
    }

    const username = userIdData.data[0].username;
    
    const categoryNameData = await axios.get(`api/categories/${categoryId}`);
    const categoryName = categoryNameData.data[0].name;
    
    const orgLangNameData = await axios.get(`api/languages/${orgLangId}`);
    const orgLangName = orgLangNameData.data[0].name;

    const tranLangNameData = await axios.get(`api/languages/${tranLangId}`);
    const tranLangName = tranLangNameData.data[0].name;
    
    const displayedPayload = {
      username: username,
      name: categoryName,
      request: requestContent,
      original_language: orgLangName,
      translated_language: tranLangName,
    }

    setDisplayedRequests([displayedPayload, ...displayedRequests]); 
    await axios.post('/api/translation-request', payload);
    // window.location.reload();
  }

  return (
    <div className='request-form-container'>
    <textarea
    name='request-form'
    type='text'
    rows='5'
    placeholder='Do you want to request for translation? Post it here!'
    value={requestContent}
    onChange={handleRequest}
    >
    </textarea>
    <select
    className='categories'
    name='categories'
    onChange={handleCategories}
    >
    <option value=''>Choose a category</option>
    <option value='1'>Restaurants/Shops</option>
    <option value='2'>Signboards/Posters</option>
    <option value='3'>Messages Letters</option>
    <option value='4'>Others</option>
    </select>
  
    <select
    id='original-language'
    name='original-language'
    onChange={handleOrgLangId}
    >
    <option value=''>Choose a original language</option>
    <option value='1'>English</option>
    <option value='2'>Japanese</option>
    <option value='3'>Spanish</option>
    <option value='4'>Chinese</option>
    </select>

    <select
    id='translated-language'
    name='translated-language'
    onChange={handleTranLangId}
    >
    <option value=''>Choose a translated language</option>
    <option value='1'>English</option>
    <option value='2'>Japanese</option>
    <option value='3'>Spanish</option>
    <option value='4'>Chinese</option>
    </select>

    <div className='button-area'>
    <button 
      onClick={handleUserId}
      className='request-button'
    >Request</button>
    </div>
    </div>
  )
}

export default RequestForm