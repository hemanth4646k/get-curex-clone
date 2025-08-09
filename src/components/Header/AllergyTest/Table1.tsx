import React from 'react';
import './Table1.css';

interface TestData {
  testName: string;
  testAccuracy: string;
  consistency: boolean;
  doctorAcceptance: string;
  where: string;
  medicalRestrictions: string;
  adverseReaction: string;
  resultsTurnaround: string;
  insuranceAccepted: boolean;
  icon: string;
}

const Table1: React.FC = () => {
  const testData: TestData[] = [
    {
      testName: "At-Home Test Kit",
      testAccuracy: "High",
      consistency: true,
      doctorAcceptance: "Accepted",
      where: "Home",
      medicalRestrictions: "None",
      adverseReaction: "None",
      resultsTurnaround: "6-10 days",
      insuranceAccepted: false,
      icon: "home-test-icon"
    },
    {
      testName: "In-Lab Test",
      testAccuracy: "High",
      consistency: true,
      doctorAcceptance: "Gold Standard",
      where: "LabCorp/Quest",
      medicalRestrictions: "None",
      adverseReaction: "None",
      resultsTurnaround: "3-5 days",
      insuranceAccepted: true,
      icon: "lab-test-icon"
    },
    {
      testName: "At-Home Concierge Test",
      testAccuracy: "High",
      consistency: true,
      doctorAcceptance: "Gold Standard",
      where: "Home",
      medicalRestrictions: "None",
      adverseReaction: "None",
      resultsTurnaround: "10-14 days",
      insuranceAccepted: true,
      icon: "concierge-test-icon"
    },
    {
      testName: "Doctor's Office Scratch Test",
      testAccuracy: "High",
      consistency: false,
      doctorAcceptance: "Gold Standard",
      where: "Doctor's Office",
      medicalRestrictions: "No Meds Before Test",
      adverseReaction: "Possible",
      resultsTurnaround: "30 mins",
      insuranceAccepted: true,
      icon: "scratch-test-icon"
    },
    {
      testName: "Finger Prick Test Kit",
      testAccuracy: "Low",
      consistency: false,
      doctorAcceptance: "Rare",
      where: "Home",
      medicalRestrictions: "None",
      adverseReaction: "None",
      resultsTurnaround: "10+ days",
      insuranceAccepted: false,
      icon: "finger-prick-icon"
    }
  ];

  const CheckIcon = () => (
    <span className="check-icon">✓</span>
  );

  const XIcon = () => (
    <span className="x-icon">✗</span>
  );

  return (
    <div className="table-container">
      <table className="medical-tests-table">
        <thead>
          <tr>
            <th></th>
            <th>Test Accuracy</th>
            <th>Consistency</th>
            <th>Doctor Acceptance</th>
            <th>Where</th>
            <th>Medical Restrictions</th>
            <th>Adverse Reaction</th>
            <th>Results Turnaround</th>
            <th>Insurance Accepted</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((test, index) => {
            // Row color logic: header, row 4,5 grey; others yellow (1-based)
            // index 3,4 (row 4,5) grey; 0,1,2 yellow
            let rowClass = '';
            if ([3, 4].includes(index)) rowClass = 'row-grey';
            else rowClass = 'row-yellow';
            return (
              <tr key={index} className={rowClass}>
                <td className="test-name-cell">
                  <div className="test-name-container">
                    <div className="test-icon">
                      <img src="" alt={test.icon} />
                    </div>
                    <span className="test-name">{test.testName}</span>
                  </div>
                </td>
                <td>{test.testAccuracy}</td>
                <td className="icon-cell">
                  {test.consistency ? <CheckIcon /> : <XIcon />}
                </td>
                <td>{test.doctorAcceptance}</td>
                <td>{test.where}</td>
                <td>{test.medicalRestrictions}</td>
                <td>{test.adverseReaction}</td>
                <td>{test.resultsTurnaround}</td>
                <td className="icon-cell">
                  {test.insuranceAccepted ? <CheckIcon /> : <XIcon />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  color: string;
}

const ReviewsTest: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Michael W.",
      rating: 5,
      text: "The testing process was incredibly easy and reasonably priced.",
      color: "#90EE90"
    },
    {
      id: 2,
      name: "Natalie D.",
      rating: 5,
      text: "Allergy treatment made easy the way it should be. Testing done at home with a drop of blood.... Not the torture skin test I've endured before.",
      color: "#FFFF99"
    },
    {
      id: 3,
      name: "Megan S.",
      rating: 5,
      text: "Curex is an amazing alternative to in-person allergy care. I received an immediate response, got blood drawn at my own house, and got treatment delivered shortly after.",
      color: "#87CEEB"
    },
    {
      id: 4,
      name: "Amber K.",
      rating: 5,
      text: "So grateful to have found this company. From a simple blood test they were able to work out a plan for me.",
      color: "#FFB6C1"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        style={{
          fontSize: '16px',
          color: index < rating ? '#000' : '#ccc',
          marginRight: '2px'
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div style={{
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '60px',
        margin: '0 0 60px 0'
      }}>
        Reviews
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {reviews.map((review) => (
          <div
            key={review.id}
            style={{
              backgroundColor: '#f6f6f6',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',

            }}
          >
            <div
              style={{
                backgroundColor:  review.color ,
                borderRadius: '.25rem',
                flex: '0 0 auto',
                justifyContent: 'center',
                alignSelf: 'stretch',
                alignItems: 'center',
                width: 'auto',
                marginLeft: '1.5rem',
                marginRight: '1.5rem',
                padding: '.5rem 1rem',
                fontSize: '1.25rem',
                fontWeight: 500,
                display: 'flex',
                transform: 'rotate(-5deg)'
              }}
            >
              <h3 style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: 600,
                color: '#333'
              }}>
                {review.name}
              </h3>
            </div>
            
            <div style={{
              padding: '24px 20px',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                {renderStars(review.rating)}
              </div>
              
              <p style={{
                fontSize: '14px',
                lineHeight: '1.5',
                color: '#333',
                margin: '0',
                textAlign: 'center'
              }}>
                {review.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ReviewsTest };

export default Table1;
