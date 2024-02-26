import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from "react-router-dom";
import { productRows } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
function ProductList(){
    const[a, setA]=useState([])
    useEffect(()=>{
        axios.get('http://localhost/api/productList.php').then(response=>{
            setA(response.data)
            console.log(a)
        })
    },[]);
      
    
      
    return(
        <div className="productList">
           <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>file</td>
                    <td>name</td>
                    <td>stock</td>
                    <td>active</td>
                    <td>price</td>
                    <td>date</td>
                    <td>Operations</td>
                </tr>
            </thead>
           {
            a.map((x)=>{
                return(
                <tbody>
                    <td>{x.id}</td>
                    <td>{x.file}</td>
                    <td>{x.name}</td>
                    <td>{x.stock}</td>
                    <td>{x.active}</td>
                    <td>{x.price}</td>
                    <td>{x.date}</td>
                    <td><a href="javascript:void" onClick={function(event){
                        axios.get('http://localhost/api/productDelete.php?id='+x.id).then(response=>{
                            if(response.data==1){
                                event.target.parentElement.parentElement.remove()
                            }
                        })

                    }}>Deactive</a>
                    <Link to={`/product/${x.id}/`}>Edit</Link>
                    </td>
                </tbody>
                )
            })
           }
          
           </table>
        </div>
    )
}
export default ProductList