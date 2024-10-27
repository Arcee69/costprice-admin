import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';

const MerchantTypes = () => {
    const [typesData, setTypesData] = useState([]);

    const getMerchantTypesData = async () => {
        try {
            const res = await api.get(appUrls?.GET_MERCHANT_TYPES_DATA);
            setTypesData(res?.data?.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getMerchantTypesData();
    }, []);

    const options = {
        chart: {
            type: 'line',
            height: 400,
            toolbar: { show: false },
        },
        colors: ['#7E57C2', '#FF5252', '#4CAF50'],
        stroke: { curve: 'smooth', width: 3 },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            title: { text: 'Merchants' },
            labels: { formatter: (val) => `${val}` },
        },
        markers: { size: 5 },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            markers: { width: 12, height: 12 },
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
    };

    const series = [
        {
            name: 'Distributors',
            data: typesData.distributors || [300, 280, 290, 310, 320, 300, 280, 330, 340, 300, 310, 320],
        },
        {
            name: 'Wholesalers',
            data: typesData.wholesalers || [200, 220, 210, 250, 260, 240, 230, 220, 210, 260, 270, 280],
        },
        {
            name: 'Retailers',
            data: typesData.retailers || [150, 160, 170, 180, 200, 190, 210, 220, 230, 240, 250, 260],
        },
    ];

    return (
        <div>
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    );
};

export default MerchantTypes;
