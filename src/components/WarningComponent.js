import React from 'react'
import notify from '../images/notify.png'

const WarningComponent = function () {
    return (
        <div className="viewComponent">
             <div className="header">
             CẢNH BÁO BẤT THƯỜNG
            </div>
            <div style={{marginTop: '17px'}}>
                <div className="contentContainer">
                    <div className="content" style={{paddingLeft: '25px', paddingRight: '30px', paddingBottom: '20px'}}>
                        <div>
                            <div style={{display: 'flex', justifyContent:  'center', width: '100%', marginBottom: '24px'}}>
                                <div className="circle circle_25" style={{backgroundColor: '#53E959'}}></div>
                                <div className="circle circle_25" style={{backgroundColor: 'rgba(251, 152, 27, 0.4)', margin: '0 7px'}}></div>
                                <div className="circle circle_25" style={{backgroundColor: 'rgba(241, 82, 137, 0.3)'}}></div>
                            </div>
                            <div  className="speedometer" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>
                                <div className="circle_20 circle" style={{backgroundColor: '#FFFFFF', position: 'relative'}}>
                                    <div style={{position: 'absolute', width: '63.51px', height: '3px', backgroundColor: '#FFFFFF', top: '8.5px', left: '-55px', transform: 'rotate(26.16deg)', transformOrigin: '100% 100%'}}></div>
                                </div>
                            </div>
                            <div className="bold_18" style={{width: '100%', textAlign: 'center', marginTop: '15px'}}>
                                Mức độ bất thường
                            </div>
                        </div>
                        <div className="inner" style={{marginTop: '35px'}}></div>
                        <div className="flex_col" style={{alignItems: 'flex-end', position: 'relative'}}>
                            <div className="notify" style={{position: 'absolute', top: '-15px'}}>
                                <img src={notify} alt="notify"/>
                                <div>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className="info" style={{marginTop: '35px'}}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <p className="medium_18" style={{marginRight: '18px'}}>Cảnh báo thường/đã xử lý</p>
                                <div className="circle circle_16"></div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <p className="medium_18" style={{padding: '45px 0', marginRight: '18px'}}>Cảnh báo cần chú ý</p>
                                <div className="circle circle_16"></div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                <p className="medium_18" style={{marginRight: '18px'}}>Cảnh báo nguy hiểm</p>
                                <div className="circle circle_16"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default WarningComponent;