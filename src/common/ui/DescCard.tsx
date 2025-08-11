
import type { ReactElement, ReactNode } from 'react';
import './DescCard.css';

interface DescCardProps {
  heading: string|ReactNode;
  desc: string | ReactNode;
  imgSrc: string | ReactElement;
  buttonEle?: ReactElement;
  imagePosition?: 'left' | 'right';
  id?: string;
  noPadding?: boolean;
}

function DescCard({
  heading,
  desc,
  imgSrc,
  buttonEle,
  imagePosition = 'left',
  id = '',
  noPadding = false,
}: DescCardProps) {
  const isImageLeft = imagePosition === 'left';
  return (
    <section className={` ${noPadding ? '' : 'DescCard'}`}>
      <div className="DescCard-container" id={id}>
        <div
          className="DescCard-content"
          style={{
            display: 'flex',
            flexDirection: isImageLeft ? 'row' : 'row-reverse',
            alignItems: 'center',
            gap: 40,
            width: '100%',
          }}
        >
          <div className="DescCard-image-column" style={{ flex: '0 1 45%', maxWidth: '50%' }}>
            {typeof imgSrc === 'string' ? (
              <img src={imgSrc} alt={typeof heading === 'string' ? heading : ''} className="DescCard-image" style={{ width: '100%', height: 'auto', display: 'block' }} />
            ) : (
              imgSrc
            )}
          </div>
          <div className="DescCard-text-column" style={{ flex: '1 1 55%', maxWidth: '60%' }}>
          <h1 className="DescCard-title">{heading}</h1>
            <p className="DescCard-paragraph">{desc}</p>
            {buttonEle && (
              <div className="DescCard-cta">{buttonEle}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescCard;
