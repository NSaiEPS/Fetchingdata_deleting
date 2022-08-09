import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteid, SelectData, SelectId, selectSTatus } from './Redux/Actioncreator'
import DeleteIcon from '@mui/icons-material/Delete';
import './Datadisplay.css'

const Datadisplay = ({id,email}) => {
    let selectid=useSelector(SelectId)
    // console.log(selectid)
  let selectsTatus=useSelector(selectSTatus)
//   console.log(selectsTatus)


    let dispatch=useDispatch()
  let handledelete=()=>{
    // alert(`u are deleting ${id}`)
    dispatch(
        deleteid(id)

    )
  }
  return (
    <div className='Datadisplay'>
       
       <div>{email}</div> 
       <div onClick={handledelete}>
        <div>< DeleteIcon/></div>
        
        </div> 
        </div>
  )
}

export default Datadisplay