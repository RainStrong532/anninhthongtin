import React from 'react'
import subscribers from '../images/subscribers.png'
import pc from '../images/pc.png'
import mobile from '../images/mobile.png'

const VisitorComponent = function () {
    return (
        <div className="viewComponent" style={{ marginRight: '40px' }}>
            <div className="header">
                THỐNG KÊ SỐ LƯỢNG TRUY CẬP
            </div>
            <div style={{ marginTop: '17px' }}>
                <div className="contentContainer">
                    <div className="content">
                        <div className="flex_col">
                            <div className="title medium_18">
                                Số lượng user đăng kí
                            </div>
                            <div style={{ margin: '16px 0' }}>
                                <img src={subscribers} alt="subscribers" width="98px" height="98px" />
                            </div>
                            <div className="title medium_18">725 người dùng </div>
                        </div>
                        <div className="inner"></div>
                        <div>
                            <div className="title medium_18">Số lượng người online: </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '28px'}}>
                                <div style={{ marginRight: '30px' , position: 'relative'}}>
                                    <img src={pc} alt="pc" width="133px" height="126px" />
                                    <div className="circle_8 circle" style={{position: 'absolute', top: '16px', right: '16px'}}></div>
                                    <div style={{textAlign: 'center', position: 'absolute', top: '25px', left: '52px'}}>
                                        <p className="semibold_16 title ">PC</p>
                                        <p className="medium_18 title " style={{marginTop: '10px'}}>225</p>
                                    </div>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <img src={mobile} alt="mobile" width="79px" height="125px" />
                                    <div className="circle_6 circle" style={{position: 'absolute', top: '18px', right: '12px'}}></div>
                                    <div style={{textAlign: 'center', position: 'absolute', top: '25px', left: '15px'}}>
                                        <p className="semibold_16 title "> Mobile</p>
                                        <p className="medium_18 title " style={{marginTop: '10px'}}>106</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default VisitorComponent;