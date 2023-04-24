import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import EachPost from '../components/EachPost';
import SuggestBox from '../components/SuggestBox';
import './IndividualPage.css'

function IndividualPage() {
  let params = useParams();
  let requestId = Number(params.requestId);
  const [individualRequest, setIndividualRequest] = useState();
  const [allSuggestions, setAllSuggestions] = useState([]);

  useEffect(() => {
    getIndividualRequest(requestId);
  }, [])

  useEffect(() => {
    getAllSuggestionsByReqId(requestId);
  }, [])

  async function getIndividualRequest(requestId) {
      const fetchedIndividualRequest = await axios.get(`/api/translation-request/${requestId}`);
      setIndividualRequest(fetchedIndividualRequest.data);
      console.log('🙃', individualRequest)
  }

  async function getAllSuggestionsByReqId(requestId) {
      const fetchedSuggestions = await axios.get(`/api/translation-suggest/${requestId}`);
      setAllSuggestions(fetchedSuggestions.data);
      console.log('🎸',fetchedSuggestions.data)
  }

    return (
      <div className='container'>
        <Navbar className='navbar'/>
        <EachPost
        requestId={requestId}
        individualRequest={individualRequest}
        />
        <SuggestBox
        requestId={requestId}
        allSuggestions={allSuggestions}
        setAllSuggestions={setAllSuggestions}
        />
      </div>
    )
}

export default IndividualPage