import "./widgetLg.css"
function WidgetLg(){
    const Button=({type})=> {
        return <button className={"widgetLgButton"+type}>{type}</button>
    }
    return(
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Custommer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2023</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2023</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2023</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2023</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>

                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2023</td>
                    <td className="widgetLgAmount">$112.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>

                </tr>
            </table>
        </div>
    )
}
export default WidgetLg