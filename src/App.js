import logo from './logo.svg';
import './App.css';
import Datadisplay from './components/Datadisplay';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getdata, SelectData, SelectId } from './components/Redux/Actioncreator';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  let [data,setData]=useState([])
  let dispatch=useDispatch()

  let Selectdata=useSelector(SelectData)
  let selectid=useSelector(SelectId)

  console.log(Selectdata?.data)

  // useEffect(()=>{
  
  //    axios.get('https://reqres.in/api/users?page=1').then((data)=>{
  //     console.log(data.data.data)
  //     setData(data.data.data)
  //    }).catch((e=>e.message))
  // },[])



  return (
    <div className="App">

      <button className='App_button' onClick={()=>{

      dispatch( getdata())


      }}> {Selectdata?.length>0 ?  'Refresh the data' :'Fetch the data'}

{/* }}> {Selectdata?.length===0 ? 'Fetch the data': selectid? 'Refresh the data' :''} */}

      
      </button>
      <div className='App_inside'>
      {/* {Array.isArray(data) && (data?.map((item,indx)=>{
        return(
          <div key={Math.random()}>

      <Datadisplay id={item.id} email={item.email}/>


            </div>
        )
      }))} */}



{Array.isArray(Selectdata) && (Selectdata?.map((item,indx)=>{
        return(
          <div key={Math.random()}>

      <Datadisplay id={item.id} email={item.email}/>


            </div>
        )
      }))}



  
    </div></div>
  );
}

export default App;
