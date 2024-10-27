import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';

const Signups = () => {
    const [signupsData, setSignupsData] = useState({});
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

    const getSignupsData = async () => {
        try {
            const res = await api.get(appUrls?.GET_NEW_SIGN_UPS_DATA);
            setSignupsData(res?.data?.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getSignupsData();
    }, []);

    console.log(signupsData, "signupsData")

    useEffect(() => {
        if (signupsData && Object.keys(signupsData).length > 0) {
            const categories = Object.keys(signupsData);
            const merchants = categories.map(month => signupsData[month].new_merchants || 0);
            const principals = categories.map(month => signupsData[month].new_principals || 0);
            const shoppers = categories.map(month => signupsData[month].new_shoppers || 0);
          

            setChartOptions(prevOptions => ({
                ...prevOptions,
                xaxis: {
                    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                series: [
                    {
                        name: 'Merchants',
                        data: merchants
                    },
                    {
                        name: 'Principals',
                        data: principals
                    },
                    {
                        name: 'Shoppers',
                        data: shoppers
                    },
                ]
            }));
        }
    }, [signupsData]);

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

export default Signups;
