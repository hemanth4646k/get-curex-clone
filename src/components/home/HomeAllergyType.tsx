import './homeAllergyType.css';

const HomeAllergyType = () => {
  const allergyTypes = [
    {
      id: 1,
      title: 'Food Allergies',
      icon: 'food-icon', // You'll replace with actual SVG
      bgColor: 'yellow'
    },
    {
      id: 2,
      title: 'Weed Pollens',
      icon: 'weed-icon', // You'll replace with actual SVG
      bgColor: 'light-blue'
    },
    {
      id: 3,
      title: 'Cat Allergies',
      icon: 'cat-icon', // You'll replace with actual SVG
      bgColor: 'blue'
    },
    {
      id: 4,
      title: 'Dog Allergies',
      icon: 'dog-icon', // You'll replace with actual SVG
      bgColor: 'green'
    },
    {
      id: 5,
      title: 'Dust Mites',
      icon: 'dust-icon', // You'll replace with actual SVG
      bgColor: 'pink'
    },
    {
      id: 6,
      title: 'Molds',
      icon: 'mold-icon', // You'll replace with actual SVG
      bgColor: 'light-yellow'
    },
    {
      id: 7,
      title: 'Tree Pollens',
      icon: 'tree-icon', // You'll replace with actual SVG
      bgColor: 'light-gray'
    }
  ];

  return (
    <section className="home-allergy-type">
      <div className="home-allergy-type-container">
        <h2 className="home-allergy-type-title">We Treat Allergies</h2>
        <div className="allergy-type-grid">
          {allergyTypes.map((allergy) => (
            <div 
              key={allergy.id} 
              className={`allergy-type-card ${allergy.bgColor}`}
            >
              <div className="allergy-type-icon">
                {/* Placeholder for SVG icons - you'll replace these */}
                <div className={`icon-placeholder ${allergy.icon}`}></div>
              </div>
              <h3 className="allergy-type-name">{allergy.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAllergyType;
