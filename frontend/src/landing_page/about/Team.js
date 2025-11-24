// import React from 'react';

// function Team() {
//     return ( 
//         <div className='container mb-5 pb-5'>
//             <div className='row'>
//                 <div className='col-lg-5 text-center'>
//                     <img src='media/myimg.jpg' className='ms-5 myimg' />
//                     <h2 className='mt-5 lh-base fs-3'>Project Developed by<br/><b>Satyam kumar</b></h2>
//                 </div>
//                 <div className='col-lg-7'>
//                     <h1 className='ps-5'>People</h1>
//                     <p className='mt-5 fs-5 lh-lg ps-4'>This Zerodha clone project has been developed as a full-stack application replicating core trading workflows for educational and portfolio demonstration purposes. It showcases user authentication, market data integration, order placement features, and dashboard analytics.
//                     Building this application has enabled exploration of scalable system design, frontend architecture, and secure API practices inspired by industry-grade platforms.</p>
//                     <p className='fs-5 lh-lg ps-4'>
//                         Connect on <a href='https://www.linkedin.com/in/satyamkumar629'>linkedin</a> / <a href="mailto:satyamkumar629301@gmail.com">Gmail</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Team;


import React from 'react';

function Team() {
  return (
    <div className="container mb-5 pb-5">
      <div className="row align-items-center">
        <div className="col-lg-5 text-center">
          <img
            src="media/myimg.jpg"
            alt="Satyam Kumar"
            className="ms-5 myimg rounded-circle shadow-sm"
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
          <h2 className="mt-4 lh-base fs-3">
            Project Developed by <br />
            <b>Satyam Kumar</b>
          </h2>
        </div>

        <div className="col-lg-7">
          <h1 className="ps-4 fw-bold text-primary">About the Project</h1>
          <p className="mt-4 fs-5 lh-lg ps-4">
            This <b>Zerodha Clone</b> project is a full-stack web application built for
            educational and portfolio demonstration purposes. It replicates key
            trading workflows such as user authentication, market data integration,
            order placement, and portfolio analytics.
          </p>
          <p className="fs-5 lh-lg ps-4">
            The project highlights scalable system design, responsive frontend
            architecture, and secure API implementation — inspired by industry-grade
            trading platforms.
          </p>
          <p className="fs-5 lh-lg ps-4">
            Connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/satyamkumar629"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="mailto:satyamkumar629301@gmail.com"
              className="text-decoration-none text-danger"
            >
              Gmail
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
