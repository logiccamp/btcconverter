import react, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Home() {
  const [data, setData] = useState('')
  useEffect(() => {
    const action = 'getprice'
    const url = `/api/bitcoin.php?action=${action}`
    axios.get(url)
    .then((data)=>setData(data.data))
  }, [])


  return (
    <div className="App">
        <h1 align="center">BITCOIN PRICE</h1>
      <center><h3>{data}</h3></center>
      <Link to="/convert" >Convert</Link>
    </div>
  );
}

export default Home;
