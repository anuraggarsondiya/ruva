function Footer() {
    return (
      <footer className="footer pt-4 pb-3 mt-5 border-top">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Left Column: Company Info */}
            <div className="col-md-4 mb-3">
              <h5 className="fw-bold">Ruva</h5>
              <p className="text-muted">Your trusted store for quality products.</p>
            </div>
  
            {/* Center Column: Page Links */}
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="/" className="text-decoration-none">Home</a></li>
                <li><a href="/about" className="text-decoration-none">About Us</a></li>
                <li><a href="/contact" className="text-decoration-none">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Right Column: Social Media */}
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold">Connect With Us</h6>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <a href="https://facebook.com" target="_blank" className="">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="https://instagram.com" target="_blank" className="">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" className="">
                  <i className="bi bi-whatsapp fs-5"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom Line */}
          <hr className="border-secondary mt-4" />
          <p className="text-center small m-0">&copy; 2025 My E-commerce Site. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  