import React from 'react'

function Image({post}) {
    return ( 
        <>
           <img className="card-image" src={post.image} alt="" /> 
        </>
    )
}

export default Image
