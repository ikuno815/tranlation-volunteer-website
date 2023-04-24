import React, {useState} from 'react'
import './RequestBox.css';
import { useNavigate } from 'react-router-dom';
import IndividualPage from '../pages/IndividualPage';
// import axios from 'axios';


function RequestBox(props) {
    const { displayedRequests, filterPostsbyCategory, resetFilter} = props;
    // const [targetRequestId, setTargetRequestId] = useState();
    console.log('😁', displayedRequests);
    const navigate = useNavigate();

    // function handleTargetRequestId(e) {
    //   e.preventDefault();
    //   setTargetRequestId(e.target.value);
    //   handleCurrentView(e);
    //   console.log(e.target.value);
    // }
    
    // async function handleRequestId(requestId) {
    //   setTargetRequestId(requestId);
    //   navigate('/request-page');
    // }

    // function handleReload(requestId) {
    //   window.location.reload().then(
    //   navigate(`/request-page/${requestId}`))
    // }

    // async function handleEachRequestClicked(requestId) {
    //   const fetchedEachRequest = await axios.get(`/api/translation-request/${requestId}`);
    //   setSelectedRequest(fetchedEachRequest.data);
    // }

  return (
    <div className='request-home'>
      <div className='categories-container'>
        <button onClick={() => filterPostsbyCategory('Restaurants/Shops')}>Restaurants/Shops</button>
        <button onClick={() => filterPostsbyCategory('Signboards/Posters')}>Signboards/Posters</button>
        <button onClick={() => filterPostsbyCategory('Letters/Messages')}>Letters/Messages</button>
        <button onClick={() => filterPostsbyCategory('Others')}>Others</button>
        <button onClick={() => resetFilter()}>All</button>
      </div>
        {
            displayedRequests.map((request, index) => {
                return (
                      <div className='request-box' key={index}>
                        <h3>username: {request.username}</h3>
                        <div className='request-info'>
                            <p className='category'>category: {request.name}</p>
                            <p className='originalLangName'>original language: {request.original_language}</p>
                            <p className='translatedLangName'>translated language: {request.translated_language}</p>
                            <hr />
                            <p className='request-content'>{request.request}</p>
                            <button onClick={() => {navigate(`/request-page/${request.id}`)}}>see more</button>
                        </div>
                      </div>
                )
            })
        }
    </div>
  )
}

export default RequestBox