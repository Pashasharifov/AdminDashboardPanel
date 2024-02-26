import axios from "axios";
import "./newProduct.css"


export default function NewProduct(){
    return(
        <div className="newProduct">
           <h1 className="addProductTitle">New Product</h1>
           <form onSubmit={(e)=>{
                e.preventDefault()
                   
                    axios.get('http://localhost/api/newProduct.php', {
                        params: {
                         file: document.querySelector('#file').value,
                         name:document.querySelector('#name').value,
                         stock:document.querySelector('#stock').value,
                        
                         active:document.querySelector('#active').value,
                         price:document.querySelector('#price').value,
                       


                        }
                      })
                        .then(response => {
                            console.log(response)
                            if(response.data==1){
                                alert('Melumat elave olundu')
                            }
                        });
                }} className="addProductForm">
            <div className="addProductItem">
                <label >Image</label>
                <input type="file" name="file" id="file" />
            </div>
            <div className="addProductItem">
                <label >Name</label>
                <input type="text" id="name" placeholder="Apple Airpods"/>
            </div>
            <div className="addProductItem">
                <label htmlFor="">Stock</label>
                <input type="text" name="" id="stock" placeholder="123" />
            </div>
            <div className="addProductItem">
                <label htmlFor="">Price Vol</label>
                <input type="text" name="" id="price" placeholder="100$" />
            </div>
            <div className="addProductItem">
                <label htmlFor="">Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button type="submit" className="addProductButton">Create</button>
           </form>
        </div>
    )
}