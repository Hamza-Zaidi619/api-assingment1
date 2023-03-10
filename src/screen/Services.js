
import { useState } from 'react';
import axios from 'axios';

function Services() {
  const [data, setData] = useState([])
  let api = 'https://jsonplaceholder.typicode.com/comments'

  let getAPIData = () => {
    axios
      .get(api)
      .then((res) => {

        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data)

  return (
    <div className='hz'>
      <button onClick={getAPIData} variant="contained">
        get data
      </button>
      {/* {data.map((e, i) => <div>
        <h3>{e.id}</h3>
        <h4>{e.title}</h4>
        <h5>{e.body}</h5>
        
      </div> )} */}
      {
        data.map((e)=>{
          const {id,body,name,email}=e;
          return(
            <div className='ham'>
            <h1>{id}</h1>
            <h2>{body}</h2>
            <h2>{name}</h2>
            <h2>{email}</h2>
      
            </div>
          )

        })
      }
    </div>
  )
}



export default Services;