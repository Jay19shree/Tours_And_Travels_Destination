import React from 'react'
import blogAuthor from '../../assets/blog-author.jpeg';
import blog1 from '../../assets/blog1.webp';
import blog2 from '../../assets/blog2.webp';
import blog3 from '../../assets/blog3.webp';
import blog4 from '../../assets/blog4.webp';
import blog5 from '../../assets/blog5.webp';
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <>
    {/* Page section */}
    <div className="section-banner w-100">
        <div className="container">
            <div className="section-banner-content">
                <h2>Blog</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link> &nbsp;
                    </li>
                  <li>
                    <i className="bi bi-gear fs-6 pe-2"></i>Blog
                  </li>
                </ul>
            </div>

        </div>
    </div>

    <div className="blog py-5">
        <div className="container">
            <div className="row g-4 blog-page">
                <div className="col-lg-8">
                    <div className="col-lg-12">
                        <div className="blog-card mb-4 shadow">
                            <img src={blog1} className='card-img-top img-fluid' alt='Blog Image'/>
                            <div className="blog-card-body p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="blog-img mt-4">
                                        <img src={blogAuthor} className='me-3' alt='Author'/>
                                    </div>
                                </div>
                                <h3 className="card-title fw-bold mb-3">Island Hopping And Weather Tips</h3>
                                <p className="card-text mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet, illum, recusandae consequatur doloremque dicta mollitia odio explicabo veritatis ex ut ab dolore perferendis hic!

                                </p>
                                <a>
                                    Explore More <i className="bi bi arrow-up-right ms-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                     <div className="col-lg-12">
                        <div className="blog-card mb-4 shadow">
                            <img src={blog2} className='card-img-top img-fluid' alt='Blog Image'/>
                            <div className="blog-card-body p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="blog-img mt-4">
                                        <img src={blogAuthor} className='me-3' alt='Author'/>
                                    </div>
                                </div>
                                <h3 className="card-title fw-bold mb-3"></h3>
                                <p className="card-text mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet, illum, recusandae consequatur doloremque dicta mollitia odio explicabo veritatis ex ut ab dolore perferendis hic!

                                </p>
                                <a>
                                    Explore More <i className="bi bi arrow-up-right ms-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                     <div className="col-lg-12">
                        <div className="blog-card mb-4 shadow">
                            <img src={blog3} className='card-img-top img-fluid' alt='Blog Image'/>
                            <div className="blog-card-body p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="blog-img mt-4">
                                        <img src={blogAuthor} className='me-3' alt='Author'/>
                                    </div>
                                </div>
                                <h3 className="card-title fw-bold mb-3">Experience the World with our Travel Company</h3>
                                <p className="card-text mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet, illum, recusandae consequatur doloremque dicta mollitia odio explicabo veritatis ex ut ab dolore perferendis hic!

                                </p>
                                <a>
                                    Explore More <i className="bi bi arrow-up-right ms-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                     <div className="col-lg-12">
                        <div className="blog-card mb-4 shadow">
                            <img src={blog4} className='card-img-top img-fluid' alt='Blog Image'/>
                            <div className="blog-card-body p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="blog-img mt-4">
                                        <img src={blogAuthor} className='me-3' alt='Author'/>
                                    </div>
                                </div>
                                <h3 className="card-title fw-bold mb-3">Island Hopping And Weather Tips</h3>
                                <p className="card-text mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet, illum, recusandae consequatur doloremque dicta mollitia odio explicabo veritatis ex ut ab dolore perferendis hic!

                                </p>
                                <a>
                                    Explore More <i className="bi bi arrow-up-right ms-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                     <div className="col-lg-12">
                        <div className="blog-card mb-4 shadow">
                            <img src={blog5} className='card-img-top img-fluid' alt='Blog Image'/>
                            <div className="blog-card-body p-4">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="blog-img mt-4">
                                        <img src={blogAuthor} className='me-3' alt='Author'/>
                                    </div>
                                </div>
                                <h3 className="card-title fw-bold mb-3">Assertively iterate resource maximizing</h3>
                                <p className="card-text mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eveniet, illum, recusandae consequatur doloremque dicta mollitia odio explicabo veritatis ex ut ab dolore perferendis hic!

                                </p>
                                <a>
                                    Explore More <i className="bi bi arrow-up-right ms-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="details mb-4">
                        <h4>Search</h4>
                        <div className="input-group">
                            <input type='search' className='form-control' placeholder='Search...'/>
                            <button className="btn" type='button'><i className="bi bi-search"></i></button>
                        </div>
                    </div>

                    <div className="categories-card border-0">
                        <h5 className="fw-bold mb-3">Categories</h5>
                        <ul className="list-group mb-0">
                            <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-asterisk me-2"></i>
                                    <a href='#' className='text-decoration-none'>Adventure</a>
                                </div>
                                <span>2</span>
                            </li>
                        </ul>
                        <ul className="list-group mb-0">
                            <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-asterisk me-2"></i>
                                    <a href='#' className='text-decoration-none'>City Tours</a>
                                </div>
                                <span>4</span>
                            </li>
                        </ul>
                        <ul className="list-group mb-0">
                            <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-asterisk me-2"></i>
                                    <a href='#' className='text-decoration-none'>Cruises Tours</a>
                                </div>
                                <span>3</span>
                            </li>
                        </ul>
                        <ul className="list-group mb-0">
                            <li className="d-flex justify-content-between align-items-center py-2 border-top">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-asterisk me-2"></i>
                                    <a href='#' className='text-decoration-none'>Sea Tour</a>
                                </div>
                                <span>2</span>
                            </li>
                        </ul>
                    </div>

                    <div className="recent-card">
                        <h4>Recent Post</h4>
                        <div className="d-flex mb-4">
                            <img src={blog1} className='me-3 img-fluid' alt='Post Image'/>
                
                        <small className='d-block'><i className="bi bi-calendar2-week e-1"></i>May 11, 2024</small>
                    <p>Island Hopping And Weather Tips</p>
                    </div>

                     <div className="d-flex mb-4">
                            <img src={blog2} className='me-3 img-fluid' alt='Post Image'/>
                
                        <small className='d-block'><i className="bi bi-calendar2-week e-1"></i>May 11, 2024</small>
                    <p>Beach Days, Long Hikes, And</p>
                    </div>

                     <div className="d-flex mb-4">
                            <img src={blog3} className='me-3 img-fluid' alt='Post Image'/>
                
                        <small className='d-block'><i className="bi bi-calendar2-week e-1"></i>May 11, 2024</small>
                    <p>Experience the World with Our Travel Company</p>
                    </div>

                     <div className="d-flex mb-4">
                            <img src={blog4} className='me-3 img-fluid' alt='Post Image'/>
                
                        <small className='d-block'><i className="bi bi-calendar2-week e-1"></i>May 11, 2024</small>
                    <p>Experience the World with Our Travel Company</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Blog