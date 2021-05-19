import react, {useState, useEffect} from 'react'
import axios from 'axios'

function Convert() {
  const [data, setData] = useState('')
  const [result, setResult] = useState('')
  const [value, setValue] = useState('')
  const [ready, setLoading] = useState(false)

  const convertbtc = (event) => {
    event.preventDefault()
    const action = 'convert'
    const url = `/api/bitcoin.php?action=${action}&value=${value}`
    axios.get(url)
    .then((data)=>{
      if(data.status == 200){
        setLoading(true)
        setResult(data.data)
      }
    })
  }

  return (
    <div className="App">
        <h1 align="center">HOW MUCH ARE U INVESTING?</h1>
        <form onSubmit={convertbtc}>
          <input name="data" type="number" onChange={(e)=>setValue(e.target.value)} value={value} id="amount" /><br/>
          <button className="btn btn-danger" type="submit">convert</button>
        </form>
        {
          ready == true ?
          <div className="alert alert-info">
            {value}usd  =   {result}BTC
          </div>
          : ""
        }

    </div>
  );
}

export default Convert;
