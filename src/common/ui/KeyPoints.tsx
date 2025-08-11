import React from 'react';

interface KeyPointsItem {
  title: string;
  description: string;
}

interface KeyPointsProps {
  title?: string;
  items: KeyPointsItem[];
  backgroundColor?: string;
  maxWidth?: string;
}

const KeyPoints: React.FC<KeyPointsProps> = ({
  title = "Key Points",
  items,
  backgroundColor = '#f7f4e8',
  maxWidth = '800px'
}) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor,
    padding: '20px',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    maxWidth,
    margin: '0 auto'
  };

  const titleStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333'
  };

  const greenDotStyle: React.CSSProperties = {
    width: '12px',
    height: '12px',
    backgroundColor: '#28a745',
    borderRadius: '50%',
    marginRight: '10px'
  };

  const itemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '15px',
    lineHeight: '1.5'
  };

  const checkmarkStyle: React.CSSProperties = {
    color: '#28a745',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px',
    marginTop: '2px',
    flexShrink: 0
  };

  const contentStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#333'
  };

  const boldTextStyle: React.CSSProperties = {
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>
        <div style={greenDotStyle}></div>
        {title}
      </div>

      {items.map((item, index) => (
        <div key={index} style={itemStyle}>
          <span style={checkmarkStyle}>✓</span>
          <div style={contentStyle}>
            <span style={boldTextStyle}>{item.title}:</span> {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KeyPoints;
