import React from 'react'

import {pieChartData} from '../../data/dummy'
import { ChartsHeader, Pie as PieChart} from "../../components"

function Pie() {
  return (
    <div className='md-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Pie" title="Project Cost Breakdown"/>
        <div className='w-full'>
          <PieChart id="chart-pie" data={pieChartData} legendVisibilty height="full" className="dark:bg-secondary-dark-bg "/>
        </div>
    </div>
  )
}

export default Pie