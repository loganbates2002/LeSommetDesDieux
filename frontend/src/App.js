import React, {useState, useEffect} from 'react'
import BackGround from './backGround.js'
import ForeGround from './foreGround.js'

function App() {

  const [data, setData] = useState([{}])


  useEffect(() => {
    fetch("/members").then( //fetching members rout from backend
      res => res.json() // turn into json
    ).then(
      data => {
        setData(data) // set data to res using setData 
        console.log(data)
      }
    )
  }, []) // pass empty array so it only runs once

  //useEffect(() => {
  //  fetch("/video_feed").then( //fetching members rout from backend
  //    res => res.json() // turn into json
  //  ).then(
  //    data => {
  //      setData(data) // set data to res using setData 
  //      console.log(data)
  //    }
  //  )
  //}, []) // pass empty array so it only runs once


  return (
    <div>
      {(typeof data.members === 'undefined') ? ( // if data.members is undefined then show loading message 
          <h1>Loading...</h1> 
        ) : (
          data.members.map((member, index) => ( // if data.members is defined then map through data.members and show each member
            <p key={index}>{member}</p>
        ))
      )} 
      {/*<ForeGround /> */}
      <BackGround />
    </div>
  )
}

export default App
