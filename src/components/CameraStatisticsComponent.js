import React from 'react'
import ChartComponent from './ChartComponent'
import RowComponent from './RowComponent'
const data = [
    {
        title: "Số điểm camera",
        fill: 12,
        full: 12,
        color: "#FFFFFF",
        fillColor: "#FB9819",
    },
    {
        title: "Số camera hoạt động",
        fill: 10,
        full: 12,
        color: "#FFFFFF",
        fillColor: "#03C0D8",
    }
]
const CameraStatisticsComponent = function () {
    let dataList = [];
    dataList = data.map((item, index) => {
        return (
            <RowComponent key={index} item={item} paddingBottom="0" />
        )
    })
    return (
        <div className="viewComponent" style={{ marginRight: '40px' }}>
            <div className="header">
                TÌNH HÌNH TRẬT TỰ AN NINH
            </div>
            <div style={{ marginTop: '17px' }}>
                <div className="contentContainer">
                    <div className="content flex_col" style={{ paddingBottom: '15px', paddingTop: '45px' }}>
                        {
                            dataList
                        }
                        <div style={{ textAlign: 'left', width: '100%' }}>
                            <p className="medium_18" style={{ marginTop: '30px', marginBottom: '15px' }}>
                                Số vụ việc camera phát hiện
                            </p>
                        </div>
                        <div className="chartContainer">
                            <ChartComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CameraStatisticsComponent;