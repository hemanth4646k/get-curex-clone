

import React from 'react';
import Review from './Review';


// Reusable style objects
const cellBase: React.CSSProperties = {
  padding: '20px 32px',
  fontSize: '16px',
  color: '#333',
  textAlign: 'center',
};
const cellHeader: React.CSSProperties = {
  ...cellBase,
  backgroundColor: '#f8f8f8',
  borderRight: '1px solid #e0e0e0',
  fontWeight: 600,
  fontSize: '18px',
  textAlign: 'center',
};
const cellHeaderFirst: React.CSSProperties = {
  padding: '0',
  backgroundColor: '#f8f8f8',
  borderRight: '1px solid #e0e0e0',
};
const cellHeaderCurex: React.CSSProperties = {
  ...cellHeader,
  backgroundColor: '#ff9dbf',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
};
const cellLabel: React.CSSProperties = {
  ...cellBase,
  backgroundColor: '#f8f8f8',
  borderRight: '1px solid #e0e0e0',
  borderTop: '1px solid #e0e0e0',
  fontWeight: 500,
  textAlign: 'left',
};
const cellCurex: React.CSSProperties = {
  ...cellBase,
  backgroundColor: '#ff9dbf',
  borderRight: '1px solid #e0e0e0',
  borderTop: '1px solid #e0e0e0',
};
const cellWhite: React.CSSProperties = {
  ...cellBase,
  backgroundColor: 'white',
  borderRight: '1px solid #e0e0e0',
  borderTop: '1px solid #e0e0e0',
};
const cellWhiteLast: React.CSSProperties = {
  ...cellBase,
  backgroundColor: 'white',
  borderTop: '1px solid #e0e0e0',
};
const cellCurexPrice: React.CSSProperties = {
  ...cellCurex,
  padding: '20px 16px',
};
const cellWhitePrice: React.CSSProperties = {
  ...cellWhite,
  padding: '20px 16px',
};
const cellWhiteLastPrice: React.CSSProperties = {
  ...cellWhiteLast,
  padding: '20px 16px',
};
const cellCurexPopularity: React.CSSProperties = {
  ...cellCurex,
};
const cellWhitePopularity: React.CSSProperties = {
  ...cellWhite,
  padding: '20px 16px',
};
const cellWhiteLastPopularity: React.CSSProperties = {
  ...cellWhiteLast,
  padding: '20px 16px',
};

const ComparisonTable: React.FC = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr 1fr 1fr',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}>
        {/* Header Row */}
        <div style={cellHeaderFirst}></div>
        <div style={cellHeaderCurex}>
          <span style={{ fontSize: '16px' }}>⚡</span>
          Curex
        </div>
        <div style={cellHeader}>Wyndly</div>
        <div style={{ ...cellHeader, borderRight: undefined }}>Local Allergist</div>

        {/* Telemedicine Row */}
        <div style={cellLabel}>Telemedicine</div>
        <div style={cellCurex}>Yes</div>
        <div style={cellWhite}>Yes</div>
        <div style={cellWhiteLast}>No</div>

        {/* Accepts Insurance Row */}
        <div style={cellLabel}>Accepts Insurance</div>
        <div style={cellCurex}>Yes</div>
        <div style={cellWhite}>No</div>
        <div style={cellWhiteLast}>No</div>

        {/* Testing Quality Row */}
        <div style={cellLabel}>Testing Quality</div>
        <div style={cellCurex}>High</div>
        <div style={cellWhite}>Low</div>
        <div style={cellWhiteLast}>High</div>

        {/* Popularity Row */}
        <div style={cellLabel}>Popularity</div>
        <div style={cellCurexPopularity}>High</div>
        <div style={cellWhitePopularity}>Low</div>
        <div style={cellWhiteLastPopularity}>Low</div>

        {/* Price Row */}
        <div style={{ ...cellLabel, padding: '20px 16px' }}>Price</div>
        <div style={cellCurexPrice}>Most Affordable</div>
        <div style={cellWhitePrice}>Expensive</div>
        <div style={cellWhiteLastPrice}>Most Expensive</div>
      </div>
    </div>
  );
};



function Hero2(){
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{backgroundColor: "#a1d9ff", fontSize: "16px", padding: "5px", borderRadius: "8px"}}>AT-HOME IMMUNOTHERAPY</div>
            <h1>What makes Curex the top choice</h1>
            <div style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginTop: "20px"}}>
                <div style={{textAlign: "center", backgroundColor: "#f6f6f6", padding: "20px", borderRadius: "2rem"}}>
                    <img src="/YellowSyringes.avif" alt="" />
                    <h2 style={{fontSize: "18px", fontWeight: "bold", marginTop: "10px"}}>Over 50,000 Users Choose Curex</h2>
                    <br /><p>Curex has more satisfied customers than any other telemedicine clinic. Our clinical team delivers great outcomes to allergy patients in every U.S. state.</p>
                </div>
                <div style={{textAlign: "center", backgroundColor: "#f6f6f6", padding: "20px", borderRadius: "8px"}}>
                    <img src="/YellowSyringes.avif" alt="" />
                    <h2 style={{fontSize: "18px", fontWeight: "bold", marginTop: "10px"}}>Curex is the only online allergy clinic accepting insurance</h2>
                    <br /><p>Our insurance network is growing everyday so you can get the most affordable treatment available.</p>
                </div>
                <div style={{textAlign: "center", backgroundColor: "#f6f6f6", padding: "20px", borderRadius: "8px"}}>
                    <img src="/YellowSyringes.avif" alt="" />
                    <h2 style={{fontSize: "18px", fontWeight: "bold", marginTop: "10px"}}>High quality testing</h2>
                    <br /><p>Curex uses hospital-grade allergy tests that are covered by insurance. This means better treatment, lower costs and no need to re-test!</p>
                </div>
            </div>
            <div>
                <br /><br />
                <h1>Comparision</h1>
                <br /><br />
                <ComparisonTable />
            </div>
            <Review/>
        </div>
    )
}
export { Hero2 };