import React from 'react'
import './homepage.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Charts from '../../components/chart/Charts'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'


export default function Homepage() {
  return (
    <>
      {/* <Topbar/> */}
      <div>
        {/* <Topbar/> */}
        <div className='homepage'>
          {/* <Sidebar/> */}
          <FeaturedInfo/>
          <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
          <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
          </div>
        </div>
      </div>
      
    </>
    
  )
}
