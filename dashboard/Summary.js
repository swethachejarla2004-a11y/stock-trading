import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Summary = () => {
  const [dashboardData, setDashboardData] = useState({
      equity: {
          marginAvailable: 0,
          marginUsed: 0,
          openingBalance: 250000 // Mock starting balance of 2.5 Lakhs
      }
  });

  useEffect(() => {
    // Fetch live holdings to calculate margin used
    axios.get("http://localhost:3002/allHoldings").then((res) => {
        const holdings = res.data;
        let totalUsed = 0;
        
        holdings.forEach(holding => {
             totalUsed += (holding.qty * holding.avg);
        });

        const opening = 250000; // Static opening balance
        
        setDashboardData({
            equity: {
                marginUsed: totalUsed,
                marginAvailable: opening - totalUsed,
                openingBalance: opening
            }
        });
    });
  }, []);

  const data = {
    labels: ['Margin Available', 'Margin Used'],
    datasets: [
      {
        data: [dashboardData.equity.marginAvailable, dashboardData.equity.marginUsed],
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
      responsive: true,
      plugins: {
          legend: {
              display: false, 
          }
      },
      cutout: '70%', 
      maintainAspectRatio: false
  };

  return (
    <>
      <div className="summary-container">
        <div className="section-header">
            <h3 className="title">Hi, User</h3>
            {/* Divider */}
            <hr className="divider" />
        </div>

        <div className="section-summary">
            <div className="summary-box">
                <div className="header">
                    <h3>Equity</h3>
                </div>
                <div className="content">
                    <div className="data-row">
                        <div className="label">Margin available</div>
                        <div className="value">{dashboardData.equity.marginAvailable.toFixed(2)}</div>
                    </div>
                    <div className="data-row">
                        <div className="label">Margins used</div>
                        <div className="value">{dashboardData.equity.marginUsed.toFixed(2)}</div>
                    </div>
                    <div className="data-row">
                        <div className="label">Opening balance</div>
                        <div className="value">{dashboardData.equity.openingBalance.toFixed(2)}</div>
                    </div>
                    
                    <div className="graph-container">
                         <Doughnut data={data} options={options} />
                    </div>
                </div>
            </div>

             <div className="summary-box">
                <div className="header">
                    <h3>Commodity</h3>
                </div>
                <div className="content">
                    <div className="data-row">
                        <div className="label">Margin available</div>
                        <div className="value">4,012.50</div>
                    </div>
                     <div className="data-row">
                        <div className="label">Margins used</div>
                        <div className="value">0</div>
                    </div>
                     <div className="data-row">
                        <div className="label">Opening balance</div>
                        <div className="value">4,012.50</div>
                    </div>
                    
                    <div className="graph-container">
                        <Doughnut data={{
                             labels: ['Margin Available', 'Margin Used'],
                             datasets: [{
                                data: [4012.50, 0],
                                backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                                borderWidth: 1,
                             }]
                        }} options={options} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
