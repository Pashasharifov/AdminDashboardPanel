import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./product.css"
import Chart from "../../components/chart/Chart"
import PublishIcon from '@mui/icons-material/Publish';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Product(){
    const productData = [
        {
          name: 'Jan',
          "Sales": 4000,
        },
        {
            name: 'Feb',
            "Sales": 3000,
          },
          {
            name: 'Mar',
            "Sales": 5000,
          },
          {
            name: 'Apr',
            "Sales": 4000,
          },
          {
            name: 'May',
            "Sales": 3000,
          },
          {
            name: 'Jun',
            "Sales": 2000,
          },
          {
            name: 'Jul',
            "Sales": 4000,
          },
          {
            name: 'Aug',
            "Sales": 3000,
          },
          {
            name: 'Sep',
            "Sales": 4000,
          },
          {
            name: 'Oct',
            "Sales": 1000,
          },
          {
            name: 'Nov',
            "Sales": 4000,
          },
          {
            name: 'Dec',
            "Sales": 3000,
          }
      
      ];
      const[a,setA]=useState([])
      useEffect(()=>{
        var b=window.location.href.split('/')
      
        axios.get('http://localhost/api/productPlaceholder.php?id='+b[4]).then(response=> {
        setA(response.data)
        console.log(a)
        var productName=document.querySelector('#productName')
        var active=document.querySelector('#active')
        var price=document.querySelector('#price')
        var stock=document.querySelector('#stock')
        var file=document.querySelector('#file')
        productName.value=response.data[0].name
        active.value=response.data[0].active
        price.value=response.data[0].price
        stock.value=response.data[0].stock
        file.value=response.data[0].file
      })
      },[])
   
    return(
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                <button className="productAddButton">Create</button>
                 </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                   <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
                       </div>
                <div className="productTopRight">
                  <div className="productInfoTop">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXjnqG9GtQ3WE08-cw85R29qBW6bye-Sy2Q&usqp=CAU" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                  </div>
                  <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">5123</span>
                    </div>

                    <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                    </div>

                    <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">no</span>
                    </div>
                  </div>
                </div>
            </div>
            <div className="productBottom">
              <form action="" className="productForm" onSubmit={(e)=>{
                e.preventDefault()
                var b=window.location.href.split('/')
                axios.get('http://localhost/api/productUpdate.php',{
                  params:{
                    name:document.querySelector('#productName').value,
                    id: b[4],
                    stock:document.querySelector('#stock').value,
                    price:document.querySelector('#price').value,
                    active:document.querySelector('#active').value,
                    file:document.querySelector('#file').value
                    

                  }
                }
                
                ).then(response=>{
                  if(response.data==1){
                    alert('Product Data is Updated')
                  }
                })

              }}>
                <div className="productFormLeft">
                  <label htmlFor="">Product Name</label>
                  <input type="text" name="" id="productName" placeholder="Apple Airpod" />
                  <label htmlFor="">In Stock</label>
                 <input type="text" name="" id="stock" placeholder="123" />
                  <label htmlFor="">Active</label>
                  <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <label htmlFor="">Price</label>
                  <input type="text" name="" id="price" placeholder="$" />
                </div>
                <div className="productFormRight">
                  <div className="productUpload">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4RnJOmpmjX1ls6B7G-IM2KWk0dJY3DdP5g&usqp=CAU" alt="" className="productUploadImg" />
                    <label htmlFor="file">
                      <PublishIcon/>
                    </label>
                    <input type="file" id="file"/>
                  </div>
                  <button type="submit" className="productButton">Update</button>
                </div>
              </form>
            </div>
        </div>
    )
}