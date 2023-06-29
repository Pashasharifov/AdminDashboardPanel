import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./product.css"
import Chart from "../../components/chart/Chart"
import PublishIcon from '@mui/icons-material/Publish';
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
              <form action="" className="productForm">
                <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" name="" id="" placeholder="Apple Airpod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div className="productFormRight">
                  <div className="productUpload">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4RnJOmpmjX1ls6B7G-IM2KWk0dJY3DdP5g&usqp=CAU" alt="" className="productUploadImg" />
                    <label for="file">
                      <PublishIcon/>
                    </label>
                    <input type="file" style={{display:"none"}}/>
                  </div>
                  <button className="productButton">Update</button>
                </div>
              </form>
            </div>
        </div>
    )
}