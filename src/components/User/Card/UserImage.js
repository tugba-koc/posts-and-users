import React from 'react'

function UserImage({picture}) {
    return (
        <>
           <img className="card-image w-100" src={picture} alt="" /> 
        </>
    )
}

export default UserImage
