import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Datas from "../../Destination.json";

import destinationimage1 from "../../../public/Images/Destination-8.webp";
import destinationimage2 from "../../../public/Images/Destination-image-4.webp";
import destinationimage3 from "../../../public/Images/Destination-image-2.webp";
import destinationimage4 from "../../../public/Images/Destination-image-1.webp";

function ToursDetails() {
  // ✅ Get ID from URL
  const { id } = useParams();

  // ✅ Find selected tour
  const tour = Datas.find((item) => item.id === parseInt(id));

  if (!tour) return <p>Tour not found</p>;

  // ✅ Thumbnail images
  const Images = [
    destinationimage1,
    destinationimage2,
    destinationimage3,
    destinationimage4,
  ];

  // ✅ Main image
  const [mainImage, setMainImage] = useState(Images[0]);

  // ✅ Pricing
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(1);

  const priceAdult = parseInt(tour.price.replace(/\D/g, "")) || 0;
  const priceChild = priceAdult;

  const adultTotal = priceAdult * adultCount;
  const childTotal = priceChild * childCount;
  const total = adultTotal + childTotal;

  return (
    <>
      {/* ✅ Banner */}
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>{tour.name}</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="bi bi-gear fs-6 pe-1"></i>
                Trip Details
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className="destination-container">
        <div className="container my-5">
          <div className="row g-4 destination-top">
            {/* ✅ Thumbnails */}
            <div className="col-lg-2 d-flex flex-column gap-3 h-100 destination-images">
              {Images.map((img, index) => (
                <div
                  key={index}
                  className="destination-details-wrap"
                  style={{ cursor: "pointer" }}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} alt="" className="img-fluid" />
                </div>
              ))}
            </div>

            {/* ✅ Main Image */}
            <div className="col-lg-6 destination-main-image">
              <img src={mainImage} className="img-fluid w-50" alt="main" />
            </div>
          </div>

          {/* ✅ Title */}
          <h2 className="fw-bold mt-5 fs-1">{tour.name}</h2>

          {/* ✅ Book Button */}
          <button
            type="button"
            className="btn fs-4 open-book-btn"
            data-bs-toggle="modal"
            data-bs-target="#bookingModal"
          >
            Book Now
          </button>

          {/* ✅ Tour Information */}
          <div className="row">
            <div className="col-lg-9">
              <div className="row row-cols-2 row-cols-md-4 g-4 mt-2">
                {[
                  ["Accommodation", "5 Star Hotel"],
                  ["Admission Fee", "No"],
                  ["Arrival City", "London"],
                  ["Best Season", "Autumn"],
                  ["Departure City", "Kathmandu"],
                  ["Free Cancel", "Yes"],
                  ["Language", "English"],
                  ["01 Guide", "Guided"],
                  ["Minimum Age", "18"],
                  ["Hotel Transfer", "Available"],
                  ["Maximum Age", "54"],
                ].map((item, i) => (
                  <div className="col d-flex align-items-center" key={i}>
                    <i className="bi bi-building me-3 destination-details icon"></i>
                    <div className="destination-details-info">
                      {item[0]}: <br />
                      <strong>{item[1]}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ OVERVIEW */}
          <div className="row mt-5">
            <div className="col-md-9">
              <h2 className="fw-bold mt-5 fs-1">Overview</h2>
              <p className="fs-5">{tour.description}</p>
            </div>
          </div>

          {/* ✅ TOP HIGHLIGHTS */}
          <div className="row mt-5">
            <div className="col-md-9">
              <h2 className="fw-bold fs-1">Top Highlights</h2>
              <ul className="list-unstyled mt-3">
                {tour.highlights?.map((item, i) => (
                  <li className="fs-5 mb-1" key={i}>
                    <i className="bi bi-stars text-primary me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ INCLUDED / EXCLUDED */}
          <div className="row mt-5">
            <div className="col-md-9">
              <h2 className="fw-bold mb-4 fs-1">Included and Excluded</h2>

              <div className="row">
                {/* Included */}
                <div className="col-md-6 mb-3">
                  <div className="bg-light p-3 rounded shadow-sm">
                    <ul className="list-unstyled">
                      {tour.included?.map((item, i) => (
                        <li className="fs-5 mb-2" key={i}>
                          <i className="bi bi-check2-circle text-primary me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Excluded */}
                <div className="col-md-6 mb-3">
                  <div className="bg-light p-3 rounded shadow-sm">
                    <ul className="list-unstyled">
                      {tour.excluded?.map((item, i) => (
                        <li className="fs-5 mb-2" key={i}>
                          <i className="bi bi-x-circle text-danger me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ ENQUIRY FORM */}
          <div className="row mt-5">
            <div className="col-md-9">
              <div className="form-container shadow p-4">
                <h5 className="mb-4 fs-3">
                  You can send an enquiry via the form below.
                </h5>

                <div className="mb-3">
                  <strong className="fs-6">Trip name:</strong>
                  <span className="text-danger">*</span> {tour.name}
                </div>

                <form className="destination-details-form">
                  <div className="mb-3">
                    <label className="form-label required">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label required">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Country</label>
                      <select className="form-select">
                        <option disabled selected>
                          Choose a Country
                        </option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>India</option>
                        <option>Canada</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Contact Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Contact"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Your Message</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-purple px-5 py-2">
                      Send Email
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* ✅ BOOKING MODAL */}
          <div
            className="modal fade"
            id="bookingModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body book-modal-wrap d-flex p-0">
                  {/* LEFT: Traveller */}
                  <div className="col-lg-7 p-4">
                    <h6 className="mb-4">TRAVELLER</h6>

                    {/* Adult */}
                    <div className="card mb-3 shadow-sm">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Adult</h6>
                          <small>/Person</small>
                        </div>

                        <h5>${priceAdult.toLocaleString()}</h5>

                        <div className="text-end">
                          <input
                            type="number"
                            min={1}
                            value={adultCount}
                            className="form-control text-center book-quant"
                            onChange={(e) =>
                              setAdultCount(Number(e.target.value))
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {/* Child */}
                    <div className="card mb-3 shadow-sm">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                          <h6>Child</h6>
                          <small>/Person</small>
                        </div>

                        <h5>${priceChild.toLocaleString()}</h5>

                        <div className="text-end">
                          <input
                            type="number"
                            min={1}
                            value={childCount}
                            className="form-control text-center book-quant"
                            onChange={(e) =>
                              setChildCount(Number(e.target.value))
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <button className="btn btn-primary fs-4 rounded-pill px-5 py-2">
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>

                  {/* RIGHT: Summary */}
                  <div className="col-lg-5 bg-light p-4">
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-muted">BOOKING SUMMARY</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>

                    <h6>
                      {tour.name} - {tour.location}
                    </h6>
                    <p>
                      Starting Date: <strong>April 26, 2025</strong>
                    </p>

                    <div className="mb-2">
                      <div className="d-flex justify-content-between">
                        <span>
                          Adult: {adultCount} × ${priceAdult}
                        </span>
                        <span>${adultTotal.toLocaleString()}</span>
                      </div>

                      <div className="d-flex justify-content-between">
                        <span>
                          Child: {childCount} × ${priceChild}
                        </span>
                        <span>${childTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between fw-bold fs-5">
                      <span>Total:</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Modal */}
        </div>
      </div>
    </>
  );
}

export default ToursDetails;
