import React from 'react';


function RightSection({imageUrl,productName,productDescription,learnMore}) {
    return ( 
        <div className='container mb-5 py-5'>
            <div className='row'>                
                <div className='col-lg-4  ps-5 pb-5'>
                    <h1 className='my-5 pt-5 fs-2 text-muted'>{productName}</h1>
                    <p className='text-muted lh-lg fs-5'>{productDescription}</p>
                    <div className='my-4 pb-3'>
                        <a href="#" className='me-5 fs-5'>{learnMore} <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className='col-lg-8 p-3'>
                    <img src={imageUrl} style={{width:"90%",paddingLeft:"6rem"}} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;