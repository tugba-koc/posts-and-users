import React from 'react'

function PubText({ owner }) {
    return (
        <div className="d-flex flex-column">
            <p className="fs-6  m-0">{owner.firstName} {owner.lastName}</p>
            <p className="fs-6  m-0">{owner.id}</p>
        </div>
    )
}

export default PubText
