import React from 'react'

function About() {
  return (
    <div style={{ marginTop: '80px' }}>
      {/* Header Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="lead">We’re passionate about delivering quality and value.</p>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Company"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Description */}
          <div className="col-md-6">
            <h3 className="fw-bold">Who We Are</h3>
            <p className="text-muted">
              MyCompany is a modern, customer-focused brand providing quality products at the best prices.
              We are committed to transparency, trust, and satisfaction. Our goal is to make online shopping
              smooth and enjoyable for everyone.
            </p>
            <p className="text-muted">
              Whether you're looking for essentials or unique items, we're here to help with friendly service
              and fast responses. Let’s grow together 🚀
            </p>
          </div>
        </div>

        {/* Optional: Values Section */}
        <div className="row mt-5 text-center">
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Our Mission</h5>
              <p className="text-muted">To provide reliable and affordable products to our customers.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Our Vision</h5>
              <p className="text-muted">To be a trusted e-commerce brand across the country.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold">Customer First</h5>
              <p className="text-muted">We always put our customers and their happiness first.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
