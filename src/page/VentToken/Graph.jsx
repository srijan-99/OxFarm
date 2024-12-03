import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const GraphComponent = () => {
  const [timeRange, setTimeRange] = useState('1M');

  const chartConfig = {
    '1M': {
      labels: ['10/17', '10/21', '10/25', '10/29', '11/2', '11/6', '11/10', '11/14'],
      data: [24, 24.1, 24.2, 24.3, 24.4, 24.3, 24.2, 24.4],
      maxTicksX: 5,
      maxTicksY: 5,
    },
    '3M': {
      labels: ['09/01', '09/15', '10/01', '10/15', '11/01', '11/15'],
      data: [23, 23.5, 24, 24.5, 25, 24.7],
      maxTicksX: 6,
      maxTicksY: 6,
    },
    '1Y': {
      labels: ['01/2024', '04/2024', '07/2024', '10/2024'],
      data: [22, 23, 24, 25],
      maxTicksX: 4,
      maxTicksY: 5,
    },
  };

  const data = {
    labels: chartConfig[timeRange].labels,
    datasets: [
      {
        label: '0.x Farming Tokens Staked',
        data: chartConfig[timeRange].data,
        borderColor: '#ffd300',
        backgroundColor: '#ffd300',
        pointBackgroundColor: '#9C8DF5',
        pointBorderColor: '#9C8DF5',
        pointHoverBackgroundColor: '#9C8DF5',
        pointHoverBorderColor: '#9C8DF5',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `0x.farm  ${context.raw}M`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#AAA',
          maxTicksLimit: chartConfig[timeRange].maxTicksX,
        },
      },
      y: {
        grid: {
          color: '#333',
        },
        ticks: {
          color: '#AAA',
          callback: function (value) {
            return value + 'M';
          },
          maxTicksLimit: chartConfig[timeRange].maxTicksY,
        },
        min: 6,
        max: 26,
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: '#181A20',
        color: '#FFF',
        padding: '20px',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '800px',
        margin: '20px auto',
        position: 'relative',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '10px',
        }}
      >
        <h3
          style={{
            color: '#ffd300',
            fontSize: '1.2rem',
            marginBottom: '10px',
            marginTop: '20px',
          }}
        >
          WYS tokens Farmed Over Time
        </h3>

        {/* Toggle buttons inside the heading */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {['1M', '3M', '1Y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              style={{
                backgroundColor: timeRange === range ? '#ffd300' : '#2A2F44',
                color: timeRange === range ? '#FFF' : '#AAA',
                padding: '8px 12px',
                borderRadius: '10px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                minWidth: '50px',
                textAlign: 'center',
              }}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          width: '100%',
          height: '300px',
        }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default GraphComponent;
