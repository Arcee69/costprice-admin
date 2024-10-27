import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';

const Sales = ({ time }) => {
    const [salesData, setSalesData] = useState({});
    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'bar',
            height: 350
        },
        xaxis: {
            categories: [] // Default empty array for categories
        },
        colors: ['#2B3674', '#F87171', '#A78BFA'], // Colors for each data type
        series: [] // Default empty array for series
    });

    const getSalesData = async () => {
        try {
            const res = await api.get(appUrls?.GET_SALES_DATA + `?axis=${time}`);
            setSalesData(res?.data?.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getSalesData();
    }, [time]);

    console.log(salesData, "salesData")

    useEffect(() => {
        if (salesData && Object.keys(salesData).length > 0) {
            const categories = Object.keys(salesData);
            const distributors = categories.map(month => salesData[month].distributor || 0);
            const wholesalers = categories.map(month => salesData[month].wholesaler || 0);
            const retailers = categories.map(month => salesData[month].retailer || 0);
            // const shopper = categories?.map(month => salesData[month].shopper || 0);

            setChartOptions(prevOptions => ({
                ...prevOptions,
                xaxis: {
                    categories: categories
                },
                series: [
                    {
                        name: 'Distributors',
                        data: distributors
                    },
                    {
                        name: 'Wholesalers',
                        data: wholesalers
                    },
                    {
                        name: 'Retailers',
                        data: retailers
                    },
                    // {
                    //     name: 'Shopper',
                    //     data: shopper
                    // },
                ]
            }));
        }
    }, [salesData]);

    return (
        <div>
            {chartOptions.series.length > 0 ? (
                <Chart 
                    options={chartOptions} 
                    series={chartOptions.series} 
                    type="bar" 
                    height={350} 
                />
            ) : (
                <p>Loading chart data...</p>
            )}
        </div>
    );
};

export default Sales;
