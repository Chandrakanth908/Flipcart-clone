import React from 'react'

function ProductCategory({title , description , imgsrc}) {
    return (
        <div className='productCategory'>
            
            <div className='pro-1'>
                <img src={imgsrc} alt="img4"/>
            </div>
            <div className="pro-3">
            <strong>{title}</strong>
            </div>

            <div className='pro-2'> 
                
                <p>{description}</p>
            </div>
            
            
        </div>
    )
}

export default ProductCategory
