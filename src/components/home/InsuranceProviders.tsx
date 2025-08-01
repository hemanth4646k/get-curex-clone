import './insuranceProviders.css';

const InsuranceProviders = () => {
  const insuranceProviders = [
    {
      id: 1,
      name: 'UnitedHealthcare',
      logo: 'united-healthcare-logo', // You'll replace with actual logo
      color: '#0066cc'
    },
    {
      id: 2,
      name: 'Aetna',
      logo: 'aetna-logo', // You'll replace with actual logo
      color: '#7b2cbf'
    },
    {
      id: 3,
      name: 'Blue Cross Blue Shield',
      logo: 'bcbs-logo', // You'll replace with actual logo
      color: '#0066cc'
    },
    {
      id: 4,
      name: 'Anthem',
      logo: 'anthem-logo', // You'll replace with actual logo
      color: '#00a0df'
    },
    {
      id: 5,
      name: 'Centene',
      logo: 'centene-logo', // You'll replace with actual logo
      color: '#0066cc'
    },
    {
      id: 6,
      name: 'Humana',
      logo: 'humana-logo', // You'll replace with actual logo
      color: '#8bc34a'
    }
  ];

  return (
    <section className="insurance-providers">
      <div className="insurance-providers-container">
        <h2 className="insurance-providers-title">
          We accept all major insurance providers
        </h2>
        <div className="insurance-providers-grid">
          {insuranceProviders.map((provider) => (
            <div key={provider.id} className="insurance-provider-item">
              <div className="insurance-logo-placeholder">
                {/* Placeholder for actual logos - you'll replace these */}
                <span 
                  className="logo-text" 
                  style={{ color: provider.color }}
                >
                  {provider.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceProviders;
