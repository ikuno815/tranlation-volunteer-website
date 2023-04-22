import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import RequestForm from '../components/RequestForm';
import RequestBox from '../components/RequestBox';
import './Home.css'
import axios from 'axios';

function Home() {
  const [allRequests, setAllRequests] = useState([]);
  const [displayedRequests, setDisplayedRequests] = useState(allRequests);
    //=> displayedPosts = default is allPosts
    //mapのときもdisplayedPostsにする
    //resetFilterHandlerも作る=> setdisplayedPosts(allPosts)

    useEffect(() => {
      getAllRequests();
    }, [])

    async function getAllRequests() {
        const fetchedRequests = await axios.get('/api/translation-request');
        setAllRequests(fetchedRequests.data);
        setDisplayedRequests(fetchedRequests.data);
        console.log('🙃',fetchedRequests.data)
    }

    function filterPostsbyCategory(category) {
      const filteredPosts = allRequests.filter((post) => post.name === category);
      setDisplayedRequests(filteredPosts)
    }

    function resetFilter() {
      setDisplayedRequests(allRequests)
    }

  return (
    <div className='container'>
      <div>
      <Navbar className='navbar'/>
      </div>
      <div>
      <RequestForm 
        className='request-form'
        setDisplayedRequests={setDisplayedRequests}
        displayedRequests={displayedRequests}
      />
      </div>
      <div className='home-container'>
      <RequestBox 
        className='request-box'
        displayedRequests={displayedRequests}
        resetFilter={resetFilter}
        filterPostsbyCategory={filterPostsbyCategory}
      />
      </div>
    </div>
  )
}

export default Home