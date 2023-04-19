import React from 'react'

function RequestForm() {
  return (
    <div>
    <label>Request Form</label>
    <textarea
    name='request-form'
    type='text'
    rows='5'
    placeholder='Do you want to request for translation? Post it here!'
    >
    </textarea>
    <select
    name='categories'
    defaultValue='choose a category'
    >
    <option value="someOption">Restaurants/Shops</option>
    <option value="someOption">Signboards/Posters</option>
    <option value="someOption">Messages Letters</option>
    <option value="someOption">Others</option>
    </select>
    <button>Request!</button>
    </div>
  )
}

export default RequestForm