import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
const Details = () => {
  const location = useLocation();

  const[detail, setDetail] = useState(location?.state?.show)

//   useEffect(() => {
//         if(location?.state){
            
//         }
//   }, [location])
  console.log(location.state);

  return( <>

  <p>{detail?.summary}</p>
  
  </>);
};

export default Details;