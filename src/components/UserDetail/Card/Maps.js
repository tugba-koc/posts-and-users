import React from "react";

function Maps({ location }) {
  return (
    <>
      <iframe
        title="maps"
        height="100%"
        width="100%"
        src={`https://www.google.com/maps?q=${
          location.country + "," + location.state + "," + location.city 
        }&output=embed`}
        loading="lazy"
      ></iframe>
    </>
  );
}
export default Maps;
