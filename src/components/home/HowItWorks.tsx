import './howItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Fill out Form',
      description: 'It only takes a few minutes to answer a few questions about your medical history',
      icon: 'form-icon',
      bgColor: 'light-blue',
      image: '/src/assets/fill-form.jpg'
    },
    {
      id: 2,
      title: 'Connect With Provider',
      description: 'Curex providers can connect with you via Zoom or text',
      icon: 'provider-icon',
      bgColor: 'pink',
      image: '/src/assets/doctor-provider.jpg'
    },
    {
      id: 3,
      title: 'Start Treatment',
      description: 'Get your allergy treatment delivered to your door',
      icon: 'treatment-icon',
      bgColor: 'yellow',
      image: '/src/assets/treatment-package.jpg'
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
