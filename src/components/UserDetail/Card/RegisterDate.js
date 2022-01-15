import React from 'react'

function RegisterDate({registerDate}) {
    let date = new Date(registerDate);
    return (
        <>
            <p className="fs-small"> <span className="fs-small fw-bolder">Register Date :</span> {date.toString().slice(4,21)} </p>
        </>
    )
}

export default RegisterDate
