import './ImmunoForMe.css';

const ImmunotherapyCard = () => {
  return (
    <div className="immunotherapy-card" id="who-is-it-for">
      <h1 className="card-title">Who is immunotherapy for? Am I a good fit?</h1>
      
      <p className="misconception-text">
        A common misconception is that immunotherapy is only for people who 
        experience very severe allergies.
      </p>
      
      <p className="main-content">
        While this treatment is very effective for people suffering from severe reactions, 
        anyone with seasonal, indoor or pet allergies can experience a significant 
        improvement in quality of life as a result of this treatment, along with a lower 
        chance of developing more serious conditions down the road.
      </p>
      
      <p className="safety-info">
        Immunotherapy is safe and effective for both adults and kids 5+.
      </p>
    </div>
  );
};

export default ImmunotherapyCard;