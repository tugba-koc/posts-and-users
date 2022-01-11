import React from 'react'

function Tag({tags}) {
    return (
        <div className="d-flex flex-row">
            {tags.map((el,index)=>(
                <p key={index} className="px-3 py-1 bg-danger me-3 rounded-pill text-light fw-normal fs-small">{el}</p>
            ))}
        </div>
    )
}

export default Tag
