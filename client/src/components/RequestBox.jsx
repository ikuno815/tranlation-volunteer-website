import React from 'react'
import './RequestBox.css';
import { useNavigate } from 'react-router-dom';


function RequestBox(props) {
    const { displayedRequests, filterPostsbyCategory, resetFilter} = props;
    console.log('😁', displayedRequests);
    const navigate = useNavigate();

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
                        <div className='upper-part'>
                          <div className='basic-info'>
                          <h3>username: {request.username}</h3>
                          <h3>category: {request.name}</h3>
                          <h3>From: {request.original_language}  Into: {request.translated_language}</h3>
                          </div>
                        </div>

                        <div 
                        className='content'
                        onClick={() => {navigate(`/request-page/${request.id}`)}}
                        >
                        <p>{request.request}</p>
                        </div>
                      </div>
                )
            })
        }
    </div>
  )
}

export default RequestBox