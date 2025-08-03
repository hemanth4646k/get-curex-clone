import './SmallIconCards.css';

export interface SmallIconCardItem {
  id: number | string;
  title: string;
  icon: React.ReactNode;
  bgColor?: string;
}

interface SmallIconCardsProps {
  title?: string;
  items: SmallIconCardItem[];
  className?: string;
}

const SmallIconCards = ({ title, items, className = '' }: SmallIconCardsProps) => {
  return (
    <section className={`small-icon-cards ${className}`.trim()}>
      <div className="small-icon-cards-container">
        {title && <h2 className="small-icon-cards-title">{title}</h2>}
        <div className="small-icon-cards-grid">
          {items.map((item) => (
            <div
              key={item.id}
              className={`small-icon-card${item.bgColor ? ' ' + item.bgColor : ''}`}
            >
              <div className="small-icon-card-icon">
                {item.icon}
              </div>
              <h3 className="small-icon-card-name">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallIconCards;
