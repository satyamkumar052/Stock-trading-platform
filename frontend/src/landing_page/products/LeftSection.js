import React from 'react';


function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-lg-7 p-3'>
                    <img src={imageUrl} style={{width:"85%"}} />
                </div>
                <div className='col-lg-5 my-5'>
                    <h1 className='fs-2 text-muted'>{productName}</h1>
                    <p className='text-muted fs-5 lh-lg'>{productDescription}</p>
                    <div className='my-4 pb-3'>
                        { tryDemo ? <a href={tryDemo} className='me-5'>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a> : "" }
                        { learnMore ? <a href={learnMore}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a> : "" }
                    </div>
                    <div> 
                        <a href={googlePlay}><img className='me-3 ' src="media/googlePlayBadge.svg" /></a>
                        <a href={appStore}><img src="media/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;