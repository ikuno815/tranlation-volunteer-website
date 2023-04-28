import React, { useState, useEffect } from 'react'
import './EachPost.css';

function EachPost(props) {
  const { requestId, individualRequest } = props;
  console.log('🌸', requestId, individualRequest); 

  return (
            individualRequest?.map((request, index) => {
              return (
                <div className='request-container'  key={index}>
                <div className='upper-part'>
                  <div className='basic-info'>
                    <h3>username: {request.username}</h3>
                    <h3>category: {request.name}</h3>
                    <h3>From: {request.original_language}  Into: {request.translated_language}</h3>
                  </div>
                </div>
              
                <div className='content'>
                  <p>{request.request}</p>
                </div>
               
              </div>
              )
    })
  )
}

export default EachPost