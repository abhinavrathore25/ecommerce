import React, { useState } from 'react';
import './AdminDashboard.css';
import BarChart from './BarChart';
import RecentOrdersTable from './RecentOrdersTable';

const cardContent = [
    {
        heading: 'Total Products',
        value: '12'
    },
    {
        heading: 'Total Sales',
        value: '1300'
    },
    {
        heading: 'New Customers',
        value: '110'
    },
    {
        heading: 'Total Profit',
        value: '1200$'
    }
];

const cardColors = ['#F39C12', '#27AE60', '#3498DB', '#F1C40F', '#9B59B6'];

const AdminDashboard = () => {

    const [showCardModal, setshowCardModal] = useState(false);

    return (
        <div className='adminDashboardContainer'>
            
            {
                showCardModal &&
                <div className='dashboardCardModal'>
                    <button className='modalCloseButton' onClick={() => setshowCardModal(false)}>
                        X
                    </button>
                </div>
            }

            <div className='dashboardCardConatainer'>
                {cardContent.map((content, index) => {
                    return (
                        <div className='dashboardCard' key={index}
                            style={{ backgroundColor: cardColors[Math.floor(Math.random() * cardColors.length)] }}>
                            <h1>{content.heading}</h1>
                            <hr />
                            <p>{content.value}</p>
                            <hr />
                            <button className='card-angle-button' onClick={() => setshowCardModal(true)}>
                                <i className="fa-solid fa-angles-right card-angle"></i>
                            </button>
                        </div>
                    )
                })}
            </div>

            <div className='dashboardTableContainer'>
                <RecentOrdersTable />
            </div>

            <div className='dashboardChartContainer'>
                <BarChart />
            </div>
        </div>
    )
}

export default AdminDashboard;
