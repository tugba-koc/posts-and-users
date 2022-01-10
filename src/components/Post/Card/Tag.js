import React from 'react'

function Tag({tags}) {
    return (
        <div className="d-flex flex-row">
            {tags.map((el)=>(
                <p className="">{el}</p>
            ))}
        </div>
    )
}

export default Tag
