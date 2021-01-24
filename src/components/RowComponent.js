import React from 'react'

const RowComponent = function ({paddingBottom, item}) {
    return (
        <div style={{width: '100%', paddingBottom: paddingBottom ? paddingBottom : '15px', paddingTop: '15px'}}>
            <div className="row">
                <div className="title medium_18">
                    {item.title}
                </div>
                <div className="measure" style={{display: 'flex', alignItems: 'center'}}>
                    <div className="dot" style={{marginRight: '40px'}}></div>
                    <div className="full">
                        <div className="fill" style={{backgroundColor: item.fillColor ? item.fillColor : "#FFFFFF", width: (item.fill/item.full)*100+'%', height: '100%'}}>
                            <p className="number" style={{color: item.color ? item.color : "#000000"}}>
                                {item.fill < 10 ? "0" + item.fill : item.fill}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RowComponent;