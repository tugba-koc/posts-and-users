import React from 'react'

function PublishedDate({publishDate}) {
  let date = new Date(publishDate);
  
    return (
        <>
          <p className="fs-small">{date.toString().slice(4,21)}</p>  
        </>
    )
}

export default PublishedDate
