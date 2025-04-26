import React from 'react'

function Contact() {
  return (
    <div style={{ marginTop: '70px' }}>
      {/* Header Section */}
      <div className="text-dark text-center py-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="lead">We’d love to hear from you. Reach out anytime!</p>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold mb-4">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <h4 className="fw-bold mb-4">Get in Touch</h4>
            <p><i className="bi bi-geo-alt-fill me-2 text-success"></i> 123 Market Street, City, India</p>
            <p><i className="bi bi-telephone-fill me-2 text-success"></i> +91 9876543210</p>
            <p><i className="bi bi-envelope-fill me-2 text-success"></i> contact@mycompany.com</p>

            {/* WhatsApp Connect Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success mt-4 d-inline-flex align-items-center"
            >
              <i className="bi bi-whatsapp me-2 fs-5"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
