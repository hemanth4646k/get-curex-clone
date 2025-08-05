import React from "react";
import ReviewCard from "./ReviewCard";
import DescCard from "../../common/ui/DescCard";
import StyledReviewGrid from "./StyledReviewGrid";

const ReviewContainer: React.FC = () => {
  // Split reviews into 3 columns for better distribution
  const reviews = [
    {
      name: "Eric Foust",
      date: "May 15, 2025",
      review: `I've only been on Curex for about 9 months, but I have definitely noticed a difference day to day. I breath easier. I seldom break out in hives anymore (pre-Curex and during my years of weekly and biweekly shots I would deal with hives almost everyday.) I have not used my rescue inhaler in months. I don't know that Curex would work this well for everyone but I can say without hesitation that it's worth trying. It has improved my life in so many ways. I cannot say enough good about Curex. Thank you very much to everyone at Curex. What you do means more than you may ever know.`,
      imageUrl:
        "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
      sourceIconUrl:
        "https://ik.imagekit.io/senja/tr:w-40,f-png/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964",
      sourceLink:
        "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUNZaGRUMVdnEAE!2m1!1s0x0:0x34997b93db186bf7!3m1!1s2@1:CIHM0ogKEICAgMCYhdT1Wg%7CCgwIktTjwAYQwNKezAM%7C?hl=en",
    },
    {
      name: "Leah Butler",
      date: "May 15, 2025",
      review: `We have been very pleased with Curex. My daughter has suffered with allergies her whole life. She has improvements within the first month. Now after 3 months she has gone from 3 allergy medications everyday to just occasionally taking 1 medication. We would recommend Curex to everyone.`,
      imageUrl:
        "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
      sourceIconUrl:
        "https://ik.imagekit.io/senja/tr:w-40,f-png/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964",
      sourceLink:
        "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNZaGF6ajFBRRAB!2m1!1s0x0:0x34997b93db186bf7!3m1!1s2@1:CIHM0ogKEICAgMCYhazj1AE%7CCgwI29XjwAYQsOaCiwE%7C?hl=en",
    },
    {
      name: "Zack",
      date: "May 15, 2025",
      review: `I’ve had severe allergies to animals, grass, pollen, etc for most of my life with the last few years putting me in horrible pain. Since starting allergy drops through curex, I’m able to pet and play with my dog without severe breathing issues, breaking out in hives, or skin pain. Even with spring in bloom now, my allergies have been much more manageable. Now I can be around animals, walk in grass, and survive the spring! I experienced relief almost immediately which was quite surprising. As someone that loves animals and nature, this treatment really has been life changing. Between the efficacy of the medicine and the customer/patient service that Curex provides, I cannot recommend it enough!`,
      imageUrl:
        "https://cdn.senja.io/public/media/CEzlnDYLcj3JPur6iJ6l6P7G.jpeg?width=63&height=63&format=webp",
      sourceIconUrl:
        "https://ik.imagekit.io/senja/tr:w-40,f-png/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964",
    },
    {
      name: "Jenn Reddinger",
      date: "Jul 31, 2025",
      review: `I have had Allergies since I was 7 years old and the last few years were unbearable.  I went to an allergist and found I was allergic to so many things, especially anything outdoors and my Dogs! Their solution would have been going in for shots multiple times a week for the 1st year! That is an unrealistic burden of time.
Then I saw Curex advertised and thought it's worth a try. I am so incredibly happy and it has made a world of difference without the hassle of shots and Dr. visits.
The monthly payment is less than I was spending on Allergy medicine and my quality of life has greatly improved.  I told my PCP this is a much better solution for terrible allergy sufferers.
They warn it may take a few months but it started working quicker for me. I did hit a bout of allergy symptoms after about 60 days, but only lasted about 2 weeks. Even at peak allergy times they are barely noticeable. The team follows up and the customer service has been great. I highly recommend this as a solution!`,
      imageUrl:
        "https://senja-lh3.b-cdn.net/geougc-cs/AB3l90B-25cDN7lzW1NTP9r1JZFVbtKriV2EUS24QEVvLTtNayPDlTdJphcTzZIXHa_9K_JYBPz-gqKihyOVw0w2aT55tojijHiUdYaOaNCNkXefyr5fEqDgEl6DYncCPR6QAxYXnu2jJq8qYxHo?width=500",
      sourceIconUrl:
        "https://ik.imagekit.io/senja/tr:w-40,f-png/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964",
    },
    {
      name: "Frances Andrews",
      date: "Jul 30, 2025",
      review: `I started using Curex two years ago. At first I was skeptical about using an online allergy company thinking that communications would be an issue. I am happy to say that my concerns have been completely alleviated. Curex has been very attentive answering any of my questions very quickly and providing excellent customer care. The entire staff, including the allergists have been excellent and my allergy symptoms have been steadily improving. Thanks Curex!`,
      imageUrl:
        "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
      sourceIconUrl:
        "https://ik.imagekit.io/senja/tr:w-40,f-png/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964",
    },
    {
      name: "Mickey Ward",
      date: "Mar 15, 2025",
      review: `Life-Changing Allergy Treatment – Curex is the Best!

I cannot recommend Curex enough for allergy treatment! The process is seamless—signing up online was quick and easy, and they scheduled a Zoom consultation right away. Their team created a personalized treatment plan based on my allergy test results and mailed the treatment directly to my door.

The treatment itself is incredibly simple—just three drops under your tongue daily, and that's it! In just a year, you can become allergy-free. I was allergic to nearly everything—dogs, cats, horses, most plants, and trees. Now? I have three cats and a dog in my home, and I no longer have allergies! I used to rely on daily allergy pills and nasal spray, but thanks to Curex, I don't need either anymore!

The care is top-notch, with regular Zoom check-ins to monitor progress and adjust treatment as needed. Plus, they send a fresh bottle every month, so I never have to worry about running out. I even went through five years of allergy shots (three shots per week!) when I was younger, and they never gave me the lasting relief that Curex's sublingual treatment has.

This has truly been one of the best decisions I've made as an adult. It worked so well for me that I even signed up my son, and he's experiencing the same amazing results! If you have allergies or suspect you might, don't wait—sign up with Curex. It's been absolutely life-changing!`,
      imageUrl:
        "https://senja-lh3.b-cdn.net/geougc-cs/AB3l90COur_YUs9VGJdUMEw28ADJL5qt5jKh4x85Dx9Bv81ptfFzdf5QLVKTCGgK3dm28LhVqFharN5--nXFsB3YFvENWcctzmbQJRqxR6NwwUcb9tWWinbJt5cKBy7pMVdgUlTmt-Hwxg?width=500",
      sourceIconUrl:
        "https://ik.imagekit.io/senja/tr:w-40,f-png/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964",
    },
    {
      name: "Lorraine Ragni",
      date: "Jul 15, 2025",
      review: `After just three+ months of Curex allergy drops, I experienced no bad effects when I was in a dusty, fur covered apartment that in the past made me immediately congested! Was so happy to feel great for the first time in this environment! Drops don't taste bad at all and I have had no side effects whatsoever. Everyone at Curex has been super helpful and quickly responsive.`,
      imageUrl:
        "https://cdn.senja.io/public/media/DnHR6YioC5NjHwiloDSJwzft.png?width=63&height=63&format=webp",
      sourceIconUrl:
        "https://ik.imagekit.io/senja/tr:w-40,f-png/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964",
    },
    {
      name: "Emile S.",
      date: "Jul 15, 2025",
      review: `When I first heard about the Company from a friend who also has bad allergies and had found Curex — I thought it was too good to be true. The results speak for themselves. I truly can't emphasize enough how incredible Curex is. I typically never write reviews on products or companies, but I feel as though so many people could benefit from Curex if they only knew it existed and/or actually works.`,
      imageUrl:
        "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
    },
    {
      name: "Josie Baltz",
      date: "Jul 1, 2025",
      review: `I have been using these allergy drops for about 2 years now and I really see a difference. When I first started them, I didn't think they would actually work well. I experienced bad allergies daily (to animals, grass, pollen, etc). I started seeing a small difference after a year and now I can see a significant change. I went from sneezing every hour, to rarely sneezing in a day. My eyes never water now and I can actually pet my dog without my nose running. I am so so thankful for these drops because I enjoy being outdoors so much and these have really allowed me to be outside again. My provider, Mark Pruitt, is seriously one of the best providers I have ever worked with. He is kind and understanding in everything he does. He always makes sure to remember details about my life and check in with me. I really am thankful for these drops because they have helped to improve my quality of life. I love how responsive the team is to every concern I have.`,
      imageUrl:
        "https://cdn.senja.io/public/media/ZlmlI2lHCYC1Ht6tuNARqtkc.jpeg?width=63&height=63&format=webp",
      sourceIconUrl:
        "https://ik.imagekit.io/senja/tr:w-40,f-png/Logos/google-logo_nQ-UQh1h8.png?updatedAt=1683237861964",
    },
  ];

  // Distribute reviews across 3 columns
  const column1 = reviews.filter((_, index) => index % 3 === 0);
  const column2 = reviews.filter((_, index) => index % 3 === 1);
  const column3 = reviews.filter((_, index) => index % 3 === 2);

  return (
    <div>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          background: "#f7f7f7",
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          padding: "20px 150px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {/* Column 1 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {column1.map((review, index) => (
            <ReviewCard key={`col1-${index}`} {...review} />
          ))}
        </div>

        {/* Column 2 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {column2.map((review, index) => (
            <ReviewCard key={`col2-${index}`} {...review} />
          ))}
        </div>

        {/* Column 3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {column3.map((review, index) => (
            <ReviewCard key={`col3-${index}`} {...review} />
          ))}
        </div>
      </div>
      <DescCard
        heading="Thousands of people trust Curex with their allergies"
        desc="Read verified reviews from actual patients."
        imgSrc={
          <iframe
            width="550"
            height="554"
            src="https://www.youtube.com/embed/SY-ZqUhemWM"
            title="People recommend Curex!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        }
      />
      <StyledReviewGrid />
    </div>
  );
};

export default ReviewContainer;
