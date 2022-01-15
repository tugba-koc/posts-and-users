import React from 'react'

function Birthday({dateOfBirth}) {
    let date = new Date(dateOfBirth);
    return (
        <>
            <p className="fs-small"> <span className="fs-small fw-bolder">Birthday :</span> {date.toString().slice(4,21)} </p>
        </>
    )
}

export default Birthday
