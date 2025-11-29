import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import destinationimage1 from '../../../public/Images/Destination-8.webp';
import destinationimage2 from '../../../public/Images/Destination-image-4.webp';
import destinationimage3 from '../../../public/Images/Destination-image-2.webp';
import destinationimage4 from '../../../public/Images/Destination-image-1.webp';


function DestinationDetails() {
  const Images =[destinationimage1, destinationimage2, destinationimage3,destinationimage4]
  const [mainImage, setMainImage]= useState(Images[0])
  return (
    <>
     {/* Page Section */}
    <div className="section-banner w-100">
        <div className="container">
            <div className="section-banner-content">
                <h2>Destination Details</h2>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
            
                    <li>
                        <i className="bi bi-gear fs-6 pe-1"></i>
                        Destination Details
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="destination-container">
      <div className="container my-5">
        <div className="row g-4 destination-top">
          <div className="col-lg-2 d-flex flex-column gap-3 h-100 destination-images">
            {Images.map((img, index)=>(
              <div 
              key={index}
              className='destination-details-wrap d-flex cursor-pointer'
                onClick={() => setMainImage(img)}
                style={{cursor:"pointer"}}
                >
                  <img src={img} alt='' className='img-fluid'/>
                </div>
            ))}
          </div>
          <div className="col-lg-6 position-relative destination-main-image">
            <img src={mainImage} className='img-fluid w-50' alt='main-image'/>
          </div>
        </div>
        <h2 className='fw-bold mt-5 fs-1'>New York, USA</h2>
        <div className="row">
          <div className="col-lg-9">
            <div className="row row-cols-2 row-cols-md-4 g-4 mt-2">
              <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Accommodation: <br/>
                    <strong>5 Star Hotel</strong>
                  </div>
              </div>

               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Admission Fee: <br/>
                    <strong>No</strong>
                  </div>
              </div>
               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Arrival City: <br/>
                    <strong>London</strong>
                  </div>
              </div>
               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Best Session: <br/>
                    <strong>Autumn</strong>
                  </div>
              </div>
               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Departure City: <br/>
                    <strong>Kathmandu</strong>
                  </div>
              </div>
               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Free Cancel: <br/>
                    <strong>Yes</strong>
                  </div>
              </div>
               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Language: <br/>
                    <strong>English</strong>
                  </div>
              </div>
               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    01 Guide: <br/>
                    <strong>Guided</strong>
                  </div>
              </div>
               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Minimum Age: <br/>
                    <strong>18</strong>
                  </div>
              </div>
               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Hotel Transfer: <br/>
                    <strong>Available</strong>
                  </div>
              </div>
               <div className="col d-flex align-items-center">
                <i className="bi bi-building me-3 destination-details icon"></i>
                  <div className="destination-details-info">
                    Maximum Age: <br/>
                    <strong>54</strong>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-9">
            <h2 className="fw-bold mt-5 fs-1">Overview</h2>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa sit ab necessitatibus ad maxime quod eos, deleniti voluptates quibusdam?                  
            </p>
            <p className="fs-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit possimus modi, aliquid libero voluptatum totam obcaecati pariatur tenetur odio. Debitis?
            </p>
          </div>
        </div>

        
        <div className="mt-5 row">
          <div className="col-md-9">
            <h2 className="fw-bold mt-5 fs-1">Top Highlights</h2>
            <p className="fs-5 mb-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia tenetur optio laboriosam ipsa iure repellat inventore quibusdam possimus, maiores sint?

            </p>

            <ul className="list-unstyled mt-3">
              <li className="fs-5 mb-1">
                <i className="bi bi-stars text-primary me-2">
                  Easily generate images with detailed text prompts
                </i>
              </li>

               <li className="fs-5 mb-1">
                <i className="bi bi-stars text-primary me-2">
                  Customize your images with different styles, moods, colors
                </i>
              </li>

               <li className="fs-5 mb-1">
                <i className="bi bi-stars text-primary me-2">
                  Generate high quality images with up to 8k resolution 
                </i>
              </li>

               <li className="fs-5 mb-1">
                <i className="bi bi-stars text-primary me-2">
                Visit Tengboche the biggest and oldest monastery in the region
                </i>
              </li>

               <li className="fs-5 mb-1">
                <i className="bi bi-stars text-primary me-2">
                Travel through the Sherpa villages of Namche, Khumjung, Khunde, and Dingboche
                </i>
              </li>

               <li className="fs-5 mb-1">
                <i className="bi bi-stars text-primary me-2">
                  Enjoy the amazing view of the Himalayas from Kala Patthar
                </i>
              </li>

            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-9">
            <div className="row">
              <h2 className="fw-bold mt-5 mb-4 fs-1">Included and Excluded</h2>
              <div className="col-md-6 mb-3">
                <div className="bg-light p-3 rounded shadow-sm">
                  <ul className="list-unstyled">
                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      Meal as per hotel plan and drinks free too.
                    </li>

                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      Return airport and round trip transfers.
                    </li>

                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      Accommodation on twin sharing basis.
                    </li>
                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      The above per day disposal basis
                    </li>
                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      Enjoy Brussels day tour Overnight Brussels
                    </li>
                
                  </ul>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="bg-light p-3 rounded shadow-sm">
                  <ul className="list-unstyled">
                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      Meal as per hotel plan and drinks free too.
                    </li>

                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      Return airport and round trip transfers.
                    </li>

                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      Accommodation on twin sharing basis.
                    </li>
                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      The above per day disposal basis
                    </li>
                    <li className="fs-5 mb-2">
                      <i className="bi bi-check2-circle text-primary me-2">
                      </i>
                      Enjoy Brussels day tour Overnight Brussels
                    </li>
                
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-9">
            <div className="form-container shadow">
              <h5 className="mb-4 fs-3">You can send enquiry via the form below.</h5>
              <div className="mb-3">
                <strong className="fs-6">Trip name:</strong><span className="text-danger">*</span>
                New York , USA 
              </div>
              <form className="destination-details-form">
                <div className="mb-3">
                  <label className="form-label required">Your name</label>
                  <input type="text" className="form-control" placeholder='Enter Your Name' />
                </div>

                 <div className="mb-3">
                  <label className="form-label required">Your email</label>
                  <input type="text" className="form-control" placeholder='Enter Your Email' />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Country</label>
                    <select className="form-select">
                      <option selected disabled>Choose a Country</option>
                      <option value="USA">USA</option>
                       <option value="UK">UK</option>
                        <option value="India">India</option>
                         <option value="Canada">Canada</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Contact number</label>
                    <input type="text" className="form-control" placeholder='Enter Your Contact' />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                     <label className="form-label">No. of Adults</label>
                    <input type="number" className="form-control" placeholder='Enter Number of Adults' />
                  </div>

                   <div className="col-md-6">
                     <label className="form-label">No. of Children</label>
                    <input type="number" className="form-control" placeholder='Enter Number of Children' />
                  </div>
                </div>

                 <div className="mb-3">
                    <label className="form-label">Enquiry Subject</label>
                    <input type="text" className="form-control" placeholder='Enquiry Subject' />
                  </div>

                   <div className="mb-3">
                    <label className="form-label">Your Message</label>
                    <textarea type="text" className="form-control w-100" placeholder='Enter Your Message' />
                  </div>

                  <div className="text-center">
                    <button className="btn btn-purple px-5 py-2">Send Email</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DestinationDetails