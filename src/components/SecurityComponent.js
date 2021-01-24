import React from 'react'
import RowComponent from './RowComponent'

const data = [
    {
        title: "Vi phạm trật tự xã hội",
        fill: 3,
        full: 7,
        color: "#FFFFFF",
        fillColor: "#03C0D8",
    },
    {
        title: "Phạm pháp hình sự",
        fill: 1,
        full: 7,
        color: "#005E86",
        fillColor: "#FFFFFF",
    },
    {
        title: "Vi phạm hành chính",
        fill: 2,
        full: 7,
        color: "#FFFFFF",
        fillColor: "#4EB052",
    },
    {
        title: "Tai nạn giao thông",
        fill: 1,
        full: 7,
        color: "#FFFFFF",
        fillColor: "#FB9819",
    }
]

const SecurityComponent = function () {
    let dataList = [];
    dataList = data.map((item, index) => {
        return(
            index === (data.length-1)
            ?
            <RowComponent key={index} item = {item} paddingBottom="0"/>
            :
            <RowComponent key={index} item = {item}/>
        )
    })
    return (
        <div className="viewComponent">
             <div className="header">
                TÌNH HÌNH TRẬT TỰ AN NINH
            </div>
            <div style={{marginTop: '17px'}}>
                <div className="contentContainer">
                    <div className="content flex_col">
                        {
                            dataList
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SecurityComponent;