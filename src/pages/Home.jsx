import React from 'react'
import product1 from '../assets/product-1.jpg'
import product2 from '../assets/product-2.jpg'
// import product3 from '../assets/product-3.jpg'
// import product4 from '../assets/product-4.jpg'

function Home() {
  return (
    <div style={{ marginTop: '80px' }}>
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Our Products</h2>

        <div className="row">
          {/* Product 1 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product1} className="card-img-top" alt="Product 1" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Product One</h5>
                <p className="card-text text-muted">High-quality product with excellent features.</p>
                <p className="text-success fw-bold">₹999</p>
                <a
                  href="https://wa.me/919876543210"
                  className="btn btn-outline-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   <i className="bi bi-whatsapp"></i> Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product2} className="card-img-top" alt="Product 2" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Product Two</h5>
                <p className="card-text text-muted">Durable and reliable for everyday use.</p>
                <p className="text-success fw-bold">₹749</p>
                <a
                  href="https://wa.me/919876543210"
                  className="btn btn-outline-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product1} className="card-img-top" alt="Product 3" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Product Three</h5>
                <p className="card-text text-muted">Designed to deliver high performance.</p>
                <p className="text-success fw-bold">₹1,299</p>
                <a
                  href="https://wa.me/919876543210"
                  className="btn btn-outline-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product2} className="card-img-top" alt="Product 4" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Product Four</h5>
                <p className="card-text text-muted">Stylish and practical for your needs.</p>
                <p className="text-success fw-bold">₹599</p>
                <a
                  href="https://wa.me/919876543210"
                  className="btn btn-outline-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          {/* Product 1 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product1} className="card-img-top" alt="Product 1" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Product One</h5>
                <p className="card-text text-muted">High-quality product with excellent features.</p>
                <p className="text-success fw-bold">₹999</p>
                <a
                  href="https://wa.me/919876543210"
                  className="btn btn-outline-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product2} className="card-img-top" alt="Product 2" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Product Two</h5>
                <p className="card-text text-muted">Durable and reliable for everyday use.</p>
                <p className="text-success fw-bold">₹749</p>
                <a
                  href="https://wa.me/919876543210"
                  className="btn btn-outline-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product1} className="card-img-top" alt="Product 3" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Product Three</h5>
                <p className="card-text text-muted">Designed to deliver high performance.</p>
                <p className="text-success fw-bold">₹1,299</p>
                <a
                  href="https://wa.me/919876543210"
                  className="btn btn-outline-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={product2} className="card-img-top" alt="Product 4" style={{ height: "250px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Product Four</h5>
                <p className="card-text text-muted">Stylish and practical for your needs.</p>
                <p className="text-success fw-bold">₹599</p>
                <a
                  href="https://wa.me/919876543210"
                  className="btn btn-outline-success w-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> Inquiry on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
