import React from 'react'
import './RequestBox.css';

function RequestBox(props) {
    const { displayedRequests, filterPostsbyCategory, resetFilter } = props;
    console.log('😁', displayedRequests);

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
                        </div>
                      </div>
                )
            })
        }
    </div>
  )
}

export default RequestBox