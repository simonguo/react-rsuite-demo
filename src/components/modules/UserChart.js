import React from 'react';
import PageTitleBar from '../PageTitleBar';
import ECharts from 'rsuite-echarts';
import users from '../../data/users';

const UserChart = React.createClass({
    renderChart() {

        let data = {};
        users.data.forEach(user => {
            if (data[user.job]) {
                data[user.job] += 1;
            } else {
                data[user.job] = 1;
            }
        });

        console.log(data);



        const option = {
            title: {
                text: '职业人数分析'
            },
            tooltip: {},
            legend: {
                data: ['人数']
            },
            xAxis: {
                data: Object.keys(data)
            },
            yAxis: {},
            series: [{
                name: '人数',
                type: 'bar',
                data: Object.values(data)
            }]
        };
        return (
            <div className="chart-wrapper">
                <ECharts option={option} />
            </div>
        );
    },
    render: function () {

        return (
            <div >
                <PageTitleBar title="用户图表" />
                {this.renderChart()}
            </div>
        );
    }
});

export default UserChart;
