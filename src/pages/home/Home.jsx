import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
function Home(){
    return(
        <div className="home">
            <FeaturedInfo/>
            <Chart/>
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        
        </div>
    )
}
export default Home