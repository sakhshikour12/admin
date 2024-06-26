import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {
  const Button = ({type})=>{
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
            alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
            alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
            alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus"><Button type="Pending" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
            alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
            alt="" className="widgetLgImg" />
            <span className="widgetLgName">Susan</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$122.0</td>
          <td className="widgetLgStatus"><Button type="Pending" /></td>
        </tr>
      </table>
    </div>
  )
}
