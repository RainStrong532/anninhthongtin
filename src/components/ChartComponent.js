import { Line } from 'react-chartjs-2'
const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
        {
            data: [2, 6, 2, 2, 6, 6, 3, 7],
            lineTension: 0,
            fill: false,
            backgroundColor: '#76FB7B',
            borderColor: '#4EB052',
            shadow: true
        },
    ],
}

const options = {
    tooltips: {
        enabled: false
   },
    responsive: true,
    maintainAspectRatio: false,
    title:{
        display: false
    },
    legend: {
        display: false
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    // beginAtZero: true,
                    fontColor: 'rgba(0,0,0,0 )'
                    
                },
                gridLines: {
                    display:false
                }
            },
        ],
        xAxes: [
            {
                ticks: {
                    // beginAtZero: true,
                    fontColor: 'rgba(0,0,0,0 )'
                },
                gridLines: {
                    display:false
                }
            }
        ]
    },
}

function ChartComponent() {
    return (
        <div className="chart">
            <Line
                data={data}
                options={options}
            />
        </div>
    );
}

export default ChartComponent;
