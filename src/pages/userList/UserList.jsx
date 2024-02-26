import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { userRows } from "../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";


function UserList(){
  var cookie=new Cookies()
  var b=cookie.get('token')
  const [a,setA]=useState([]);

  useEffect(() => { 
    axios.get('http://localhost/api/userList.php?token='+b).then(response => {

  setA(response.data);
  console.log(a)
  
   })
  },[]);
 
   return(
    <div className="cont">
      <table>
        <thead>
            <tr>
          <td>id</td>
        <td>name</td>
        <td>fullname</td>
        <td>email</td>
        <td>password</td>
        <td>address</td>
        <td>phone</td>
        <td>active</td>
        <td>date</td>
        <td>Operations</td>
        
        </tr>
        </thead>
      
       {
        a.map((x)=>{
          return(
            <tbody>
              <tr className="tr">
            <td>{x.id}</td>
          <td>{x.name}</td>
          <td>{x.fullname}</td>
          <td>{x.email}</td>
          <td>{x.password}</td>
          <td>{x.address}</td>
          <td>{x.phone}</td>
          <td>{x.active}</td>
          <td>{x.date}</td>
          <td><a  href="javascript:void" onClick={function(event){
            axios.get('http://localhost/api/userDelete.php?id='+x.id).then(response => {

         
         if(response.data==1){event.target.parentElement.parentElement.remove()}
          
             })


          }}>Deactive</a>
       <Link to={`/user/${x.id}/`}>Edit</Link>
          </td>
          </tr> 
            </tbody>
         
          );
        })
       }
      </table>
    </div>
   )
}
export default UserList