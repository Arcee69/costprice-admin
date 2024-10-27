import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';

const MerchantGrowth = () => {
    const [growthData, setGrowthData] = useState([]);

    const getMerchantGrowthData = async () => {
        try {
            const res = await api.get(appUrls?.GET_MERCHANT_GROWTH_DATA);
            setGrowthData(res?.data?.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getMerchantGrowthData();
    }, []);

    const options = {
        chart: {
            type: 'line',
            height: 400,
            toolbar: { show: false },
        },
        colors: ['#FFB200', '#4CAF50'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 2 },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Update based on your data
        },
        yaxis: {
            title: { text: 'Merchants' },
            labels: { formatter: (val) => `${val}K` },
        },
        tooltip: {
            x: { format: 'dd MMM, yyyy' },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.5,
                opacityTo: 0,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            markers: { width: 12, height: 12 },
        },
    };

    const series = [
        {
            name: 'Unverified Merchants',
            data: growthData.unverified || [2, 1.5, 3, 1.8, 2.5, 3.1, 1.9], // Sample data, replace with `growthData`
        },
        {
            name: 'Verified Merchants',
            data: growthData.verified || [1, 1.2, 2.5, 2, 1.8, 2.9, 1.5], // Sample data, replace with `growthData`
        },
    ];

    return (
        <div>
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default MerchantGrowth;
