import React from 'react'

function PublishedDate({publishDate}) {
    return (
        <>
          <p>{publishDate.replace("T"," ").slice(0,16)}</p>  
        </>
    )
}

export default PublishedDate
