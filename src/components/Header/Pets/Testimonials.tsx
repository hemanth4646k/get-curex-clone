
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah",
    quote: "Curex has helped me to finally be a pet owner which has been a dream come true",
    videoAlt: "https://www.youtube.com/embed/7rlGFpcB7Nk",
    allergies: "Cat and dog allergies",
  },
  {
    name: "Thomas",
    quote: "I'm currently in the second month of Curex and well... I think you can see",
    videoAlt: "https://www.youtube.com/embed/jxm6tu_cono",
    allergies: "Cat and dog allergies",
  },
  {
    name: "Keri",
    quote: "I have a pet cat, I'm allergic to cats and I don't have to take allergy medicine anymore",
    videoAlt: "https://youtube.com/embed/3GQ7UeEfwoQ",
    allergies: "Cat and dog allergies",
  },
  {
    name: "Allison",
    quote: "I can cuddle with my dog and I don't experience as much itchiness or sneezing",
    videoAlt: "https://youtube.com/embed/oBWxpZyeGxI",
    allergies: "Cat and dog allergies",
  },
];

export default function Testimonials() {
  return (
    <section className={"testimonialsSection"}>
      <p className={"testimonialsLabel"}>TESTIMONIALS</p>
      <h2 className={"heading"}>Hear from real Curex patients</h2>
      <div className={"cardsContainer"}>
        {testimonials.map((testimonial, idx) => (
          <div className={"card"} key={idx}>
            <div className={"videoPlaceholder"}>
              <iframe width="299" height="168" src={testimonial.videoAlt} title={`How much did Curex help your allergies? - ${testimonial.name}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
            <div className={"nameTag"}>{testimonial.name}</div>
            <div className={"quoteBox"}>
              <div className={"stars"}>★★★★★</div>
              <p className={"quoteText"}>&quot;{testimonial.quote}&quot;</p>
            </div>
            <div className={"allergyInfo"}>
              <span className={"icon"} aria-label="cat icon">{/* Add cat icon here */}</span>
              <span className={"icon"} aria-label="dog icon">{/* Add dog icon here */}</span>
              <span className={"allergyText"}>{testimonial.allergies}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
