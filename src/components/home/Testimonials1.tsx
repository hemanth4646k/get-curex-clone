import './testimonials1.css';

const Testimonials1 = () => {
  const customerImages = [
    {
      id: 1,
      src: '/src/assets/customer1.jpg',
      alt: 'Happy Curex customer 1'
    },
    {
      id: 2,
      src: '/src/assets/customer2.jpg', 
      alt: 'Happy Curex customer 2'
    },
    {
      id: 3,
      src: '/src/assets/customer3.jpg',
      alt: 'Happy Curex customer 3'
    },
    {
      id: 4,
      src: '/src/assets/customer4.jpg',
      alt: 'Happy Curex customer 4'
    },
    {
      id: 5,
      src: '/src/assets/customer5.jpg',
      alt: 'Happy Curex customer 5'
    }
  ];

  return (
    <section className="testimonials1">
      <div className="testimonials1-container">
        <h2 className="testimonials1-title">Join over 50,000 Curex users!</h2>
        
        <div className="customer-images-grid">
          {customerImages.map((customer, index) => (
            <div key={customer.id} className={`customer-image-card card-${index + 1}`}>
              <div className="customer-image-wrapper">
                <img 
                  src={customer.src} 
                  alt={customer.alt}
                  className="customer-image"
                />
              </div>
              <div className="decorative-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-quote">
          <div className="quote-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
            </svg>
          </div>
          <blockquote className="quote-text">
            "Curex WORKS! The drops are custom to your specific allergies and are super easy to take."
          </blockquote>
          <div className="quote-author">
            <span className="author-name">Nicole</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials1;
