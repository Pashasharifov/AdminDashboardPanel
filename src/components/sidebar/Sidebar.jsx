import "./sidebar.css"
import  {MdLineStyle , MdTimeline , MdTrendingUp , MdOutlineManageAccounts , MdReport} from "react-icons/md"
import {FiUsers} from "react-icons/fi"
import {FaProductHunt} from "react-icons/fa"
import {GrTransaction} from "react-icons/gr"
import {HiOutlineDocumentReport , HiOutlineMail} from "react-icons/hi"
import {FcFeedback} from "react-icons/fc"
import {BiMessageSquareDetail} from "react-icons/bi"
import {Link} from "react-router-dom"

function Sidebar(){
    return(
      <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem active">
                        <MdLineStyle className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarListItem" >
                        <MdTimeline  className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <MdTrendingUp  className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className="link">
                <li className="sidebarListItem">
                        <FiUsers/>
                        Users
                    </li>
                    </Link>
                    <Link to="/products" className="link">
                    <li className="sidebarListItem">
                        <FaProductHunt  className="sidebarIcon"/>
                        Products
                    </li> </Link>
                    <li className="sidebarListItem">
                        <GrTransaction  className="sidebarIcon"/>
                        Transaction
                    </li>
                    <li className="sidebarListItem">
                        <HiOutlineDocumentReport  className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <HiOutlineMail  className="sidebarIcon"/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <FcFeedback  className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <BiMessageSquareDetail  className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <MdOutlineManageAccounts  className="sidebarIcon"/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <MdTimeline  className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <MdReport  className="sidebarIcon"/>
                        Report
                    </li>
                </ul>
            </div>
           
        </div>
      </div>
    )
}
export default Sidebar 