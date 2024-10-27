import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';

import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'

const SalesWeek = () => {
    const [salesWeekData, setSalesWeekData] = useState([])


    const getSalesWeekData = async () => {
        try {
            const res = await api.get(appUrls?.GET_SALES_WEEK_DATA)
            console.log(res, 'res')
            setSalesWeekData(res?.data?.data)
        } catch (err) {
            console.log(err, "err")
        }
    }

    useEffect(() => {
        getSalesWeekData()
    }, [])

    const chartData = {
        series: [ salesWeekData?.currentWeekSales, salesWeekData?.pastWeekSales ],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['currentWeekSales', 'pastWeekSales'],
          colors: ['#05CD99', '#FFCC00'], // Colors for the segments
          legend: {
            show: false,
            position: 'right',
            markers: {
              width: 12,
              height: 12,
              radius: 12,
            },
          },
          dataLabels: {
            enabled: false,
            formatter: function (val, opts) {
              return `${val.toFixed(0)}%`;
            },
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    show: true,
                    label: 'Total',
                    formatter: function () {
                      return '0';
                    },
                  },
                },
              },
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
      };

  return (
    <div className='flex flex-col gap-[37px] '>  
        <div className='flex justify-center'>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type='donut'
                height={240}
            />
        </div> 
        <div className='flex flex-col gap-[15px] '>
            <div className='flex items-center w-full justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='rounded-full w-[8px] h-[8px] bg-[#05CD99]'></div>
                    <p className='text-[#8A9099] font-poppins text-sm'>Current Week</p>
                </div>
                <p className='text-sm text-[#3F434A] font-poppins'>{salesWeekData?.currentWeekSales || 0}</p>
            </div>
            <hr />
            <div className='flex items-center w-full justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='rounded-full w-[8px] h-[8px] bg-[#FFCC00]'></div>
                    <p className='text-[#8A9099] font-poppins text-sm'>Last Week</p>
                </div>
                <p className='text-sm text-[#3F434A] font-poppins'>{salesWeekData?.pastWeekSales || 0}</p>
            </div>
        </div>
    </div>
  )
}

export default SalesWeek