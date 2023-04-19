import React, { useState } from 'react'
import axios from 'axios';
import { UserAuth } from '../context/AuthContext';

function RequestForm() {
  const { user } = UserAuth();
  const [userId, setUserId] = useState();
  const [categoryId, setCategoryId] = useState();
  const [orgLangId, setOrgLangId] = useState();
  const [tranLangId, setTranLangId] = useState();
  const [requestContent, setRequestContent] = useState('');


  const handleCategories = (e) => {
    e.preventDefault();
    console.log('😄', typeof Number((e.target.value)));//1
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

    await axios.post('/api/translationrequest', {
      user_id: userId,
      categories_id: categoryId,
      original_language_id: orgLangId,
      translated_language_id: tranLangId,
      request: requestContent
    })
  }

  return (
    <div>
    <label>Request Form</label>
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
    name='translated-language'
    onChange={handleTranLangId}
    >
    <option value=''>Choose a translated language</option>
    <option value='1'>English</option>
    <option value='2'>Japanese</option>
    <option value='3'>Spanish</option>
    <option value='4'>Chinese</option>
    </select>


    <button onClick={handleUserId}>Request!</button>
    </div>
  )
}

export default RequestForm