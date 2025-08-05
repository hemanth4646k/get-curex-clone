import './howItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Fill out Form',
      description: 'It only takes a few minutes to answer a few questions about your medical history',
      icon: 'form-icon',
      bgColor: 'light-blue',
      image: '/componentimages/home/home8.png'
    },
    {
      id: 2,
      title: 'Connect With Provider',
      description: 'Curex providers can connect with you via Zoom or text',
      icon: 'provider-icon',
      bgColor: 'pink',
      image: '/componentimages/home/home9.png'
    },
    {
      id: 3,
      title: 'Start Treatment',
      description: 'Get your allergy treatment delivered to your door',
      icon: 'treatment-icon',
      bgColor: 'yellow',
      image: '/componentimages/home/home5.png'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <h2 className="how-it-works-title">How it works</h2>
        
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.id} className="step-card">
              <div className={`step-icon-wrapper ${step.bgColor}`}>
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="step-image"
                />
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
