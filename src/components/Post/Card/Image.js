import React from 'react'

function Image({post}) {
    return ( 
        <>
           <img className="card-image w-100" src={post.image} alt="" /> 
        </>
    )
}

export default Image
