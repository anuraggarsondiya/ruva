import React from 'react';
import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
// import product3 from '../assets/product-3.jpg'
// import product4 from '../assets/product-4.jpg'

function generateWhatsAppLink(productName, productImage) {
  const phoneNumber = "917285074283"; // WhatsApp number (change to yours)
  const imageUrl = `${window.location.origin}/${productImage}`; // Image path (update accordingly if you're using local images or an external URL)
  const message = `Hello, I'm interested in *${productName}*.\nHere is the product image: ${imageUrl}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

function Home() {
  // Define product data (you can easily extend this array)
  const products = [
    {
      name: "Product One",
      image: product1,
      price: "₹999",
      description: "High-quality product with excellent features.",
    },
    {
      name: "Product Two",
      image: product2,
      price: "₹749",
      description: "Durable and reliable for everyday use.",
    },
    {
      name: "Product Three",
      image: product1,
      price: "₹1,299",
      description: "Designed to deliver high performance.",
    },
    {
      name: "Product Four",
      image: product2,
      price: "₹599",
      description: "Stylish and practical for your needs.",
    },
  ];

  return (
    <div style={{ marginTop: '80px' }}>
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Our Products</h2>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <p className="text-success fw-bold">{product.price}</p>
                  <a
                    href={generateWhatsAppLink(product.name, product.image)}
                    className="btn btn-outline-success w-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp"></i> Inquiry on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
