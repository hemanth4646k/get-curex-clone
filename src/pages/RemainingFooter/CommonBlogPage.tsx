import SmallCard from "../../common/FooterComp/smallCard";
import FaqCommon from "./FaqCommon";

interface SmallCardProps {
  title: string;
  description: string;
  link: string;
}

interface CommonBlogPageProps {
  cardData: SmallCardProps[];
  HeroComponent: React.ReactNode;
  FaqComponent?: React.ReactNode;
}

const CommonBlogPage = ({ cardData, HeroComponent}: CommonBlogPageProps) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0 20px",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {HeroComponent}
      <img src="/partners.png" alt="" />

      <div
        style={{
          width: "100%",
          padding: "20px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        
        {cardData.map((card, index) => (
          <SmallCard
            key={index}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
      
      <FaqCommon/>
    </div>
  );
};

export default CommonBlogPage;
