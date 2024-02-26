import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import axios from "axios"
import Cookies from "universal-cookie"
function Home(){
    var cookie=new Cookies()
    var a=cookie.get('token')
    console.log(a)
    axios.get('http://localhost/api/token.php', {
        params: {
        
            token:a

        }
      }).then(response=>{
        console.log(response.data)
        if(response.data!=1){
            window.location.href="http://localhost:3002/"
        }
      })
        
    return(
        <div className="home">
            
            <FeaturedInfo/>
            <Chart/>
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>
               
            </div> <a href="http://localhost:3002/">Cixis</a>
        
        </div>
    )
}
export default Home