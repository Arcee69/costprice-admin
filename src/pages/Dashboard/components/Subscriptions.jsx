import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';

const Subscriptions = ({ time }) => {
    const [subscriptionData, setSubscriptionData] = useState({});
    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'bar',
            height: 350
        },
        xaxis: {
            categories: [] // Days or months based on `time`
        },
        colors: ['#2B3674', '#F87171', '#A78BFA'],
        series: []
    });

    const getSubscriptionData = async () => {
        try {
            const res = await api.get(appUrls?.GET_SUBSCRIPTION_DATA + `?axis=${time}`);
            setSubscriptionData(res?.data?.data);
        } catch (err) {
            console.error(err);
        }
    };

    console.log(subscriptionData, "subscriptionData")

    useEffect(() => {
        getSubscriptionData();
    }, [time]);

    useEffect(() => {
        if (subscriptionData && Object.keys(subscriptionData)?.length > 0) {
            const categories = Object.keys(subscriptionData);
            const distributors = categories?.map(month => subscriptionData[month].distributor || 0);
            const wholesalers = categories?.map(month => subscriptionData[month].wholesaler || 0);
            const retailers = categories?.map(month => subscriptionData[month].retailer || 0);
            // const shopper = categories?.map(month => subscriptionData[month].shopper || 0);

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
    }, [subscriptionData]);

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

export default Subscriptions;
