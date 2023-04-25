import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import RequestForm from '../components/RequestForm';
import RequestBox from '../components/RequestBox';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import axios from 'axios';

function Home() {
  const [allRequests, setAllRequests] = useState([]);
  const [displayedRequests, setDisplayedRequests] = useState(allRequests);
  const [currentView, setCurrentView] = useState('Home');
  const [targetRequestId, setTargetRequestId] = useState();

  const navigate = useNavigate();

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

    async function filterPostsbyCategory(category) {
      const fetchedRequests = await axios.get('/api/translation-request');
      setAllRequests(fetchedRequests.data);
      const filteredPosts = allRequests.filter((post) => post.name === category);
      setDisplayedRequests(filteredPosts);

    }

    function resetFilter() {
      setDisplayedRequests(allRequests)
    }

    const handleCurrentView = (event) =>  {
      event.preventDefault();
      setCurrentView('EachRequest');
    }

    function handleRequestId(requestId) {
      setTargetRequestId(requestId);
      console.log(requestId);
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
          displayedRequests={displayedRequests}/>
        <RequestBox 
          className='request-box'
          displayedRequests={displayedRequests}
          resetFilter={resetFilter}
          filterPostsbyCategory={filterPostsbyCategory}
          handleCurrentView={handleCurrentView}/>
        </div>
    </div>
  )
}

export default Home