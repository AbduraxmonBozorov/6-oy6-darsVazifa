import React, {useState, useEffect, useRef} from 'react'
import styles from './index.module.css'
import Card from '../Card';

function Form3() {

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const startRef=useRef(0);
  const endRef=useRef(0);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(resp=>resp.json())
    .then(data=>{
      setData(data);
    })
  }, [])

  function handleFilter(){
    let startInd=startRef.current.value*1
    let endInd=endRef.current.value*1
    console.log(startInd);
    console.log(endInd);
    let newMAs=data.filter((val, ind)=>{
      return ind>=startInd && ind<endInd
    })

    setFilterData(newMAs)

    console.log(filterData);
  }

  return (
    <div>
      <div>
        <input ref={startRef} type="number" name="" id="" />
        <input ref={endRef} type="number" name="" id="" />
        <button onClick={handleFilter}>Filter</button>
      </div>
      {
        filterData.length>0 && filterData.map((item, ind)=>{
          return (<Card key={ind} data={item} />)
        })
      } 
    </div>
  )
}

export default Form3;
