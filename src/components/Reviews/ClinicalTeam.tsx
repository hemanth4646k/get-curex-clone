import React from "react";
import { StartQuizButton } from "../../common/InsurancePartners";

interface DoctorProfile {
  name: string;
  title: string;
  image: string;
  quote: string;
  badgeColor: string;
}

const ClinicalTeam: React.FC = () => {
  const doctors: DoctorProfile[] = [
    {
      name: "Dr. Neeta Ogden",
      title: "Dr. Neeta Ogden, MD",
      image: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62217a8687fdd85d4d783168_61e036bf25358710fa34bef4_Curex%20clinician%20headshots-09-1.avif",
      quote: "Curex is poised to revolutionize the way allergies are treated in America, expanding access to clinical care and treatments that can meaningfully improve patients quality of life.",
      badgeColor: "#4ade80" // Green
    },
    {
      name: "Dr. Ravi Patel",
      title: "Dr. Ravi Patel, VP Telemedicine",
      image: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62217a64215215de12b10b59_61e036bf25358710fa34bef4_Curex%20clinician%20headshots-07-3.jpg",
      quote: "At Curex, our mission is to help people improve their health and quality of life by understanding their allergies and treating them at their source.We provide more than individualized prescription treatments; we provide individualized care.",
      badgeColor: "#facc15" // Yellow
    },
    {
      name: "Jill Hamburg",
      title: "Jill Hamburg, PA - C",
      image: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62217aa42c2969a90ad02fa2_61e036bf25358710fa34bef4_Curex%20clinician%20headshots-17.jpg",
      quote: "Immunotherapy made simple. We enable patients to receive personalized allergy care on their own time. No more waiting rooms.",
      badgeColor: "#3b82f6" // Blue
    },
    {
      name: "Dr. Chet Tharpe",
      title: "Dr. Chet Tharpe, Medical Director",
      image: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61e036bf253587848e34bee5_CurexWeb-24.webp",
      quote: "Curex has set the standard for the virtual allergy experience. From the comfort of their home, patients nationwide are able to receive a personalized treatment plan from an experienced clinician, aimed at treating the source of their allergies, not just the symptoms.",
      badgeColor: "#4ade80" // Green
    },
    {
      name: "Kayla Mardaga",
      title: "Kayla Mardaga, NP",
      image: "https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/62217a7b4dd6bfc48ef9c281_61e036bf25358710fa34bef4_Curex%20clinician%20headshots-08-1.jpg",
      quote: "Curex offers convenient at-home allergy testing options. Our goal is to determine if a patient would benefit from immunotherapy and then customize a treatment plan that can reduce both the symptoms and the reliance on allergy medications.",
      badgeColor: "#ec4899" // Pink
    }
  ];

  return (
    <div style={{
      padding: "80px 20px",
      backgroundColor: "#fff",
      textAlign: "center"
    }}>
      {/* Clinical Support Badge */}
      <div style={{
        display: "inline-block",
        backgroundColor: "#e8f5e8",
        color: "#059669",
        padding: "8px 24px",
        borderRadius: "20px",
        fontSize: "14px",
        fontWeight: "600",
        marginBottom: "24px",
        border: "1px solid #059669"
      }}>
        Clinical Support
      </div>

      {/* Main Heading */}
      <h2 style={{
        fontSize: "48px",
        fontWeight: "400",
        color: "#1f2937",
        marginBottom: "60px",
        maxWidth: "800px",
        margin: "0 auto 60px auto",
        lineHeight: "1.2"
      }}>
        Our team is here to help!
      </h2>

      {/* Doctor Cards Container - Horizontal Scrollable */}
      <div style={{
        display: "flex",
        gap: "30px",
        overflowX: "auto",
        paddingBottom: "20px",
        width: "100%",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        {doctors.map((doctor, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              border: "2px solid #e5e7eb",
              borderRadius: "16px",
              padding: "30px",
              minWidth: "450px",
              maxWidth: "450px",
              position: "relative",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              flexShrink: 0
            }}
          >
            {/* Left side - Image and Badge */}
            <div style={{
              position: "relative",
              flexShrink: 0
            }}>
              <div style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#f3f4f6",
                backgroundImage: `url(${doctor.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                border: "3px solid #fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
              }} />
              
              {/* Name Badge */}
              <div style={{
                position: "absolute",
                bottom: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: doctor.badgeColor,
                color: doctor.badgeColor === "#facc15" ? "#000" : "#fff",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                maxWidth: "200px",
                textAlign: "center",
                lineHeight: "1.2"
              }}>
                {doctor.title}
              </div>
            </div>

            {/* Right side - Quote */}
            <div style={{
              flex: 1,
              paddingTop: "10px",
              position: "relative"
            }}>
              {/* Quote Icon */}
              <img 
                src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627d5740bca75ca824b2328b_-2.png"
                alt="Quote"
                style={{
                  width: "40px",
                  height: "40px",
                  position: "absolute",
                  top: "-10px",
                  right: "0px",
                  opacity: 0.6
                }}
              />

              {/* Quote Text */}
              <p style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#4b5563",
                textAlign: "left",
                marginTop: "20px",
                fontStyle: "italic"
              }}>
                {doctor.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
        <h1>Ready to treat your allergies?</h1>
        
        <StartQuizButton/>
      </div>
    </div>
  );
};

export default ClinicalTeam;
