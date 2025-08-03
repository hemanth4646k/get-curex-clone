import Hero from "../../common/ui/Hero";

function SLHero() {
  return (
    <section>
      <Hero
        heading={
          <>
            Sublingual Immunotherapy:<br />Costs & Benefits
          </>
        }
        subtitle="A comprehensive look at sublingual immunotherapy, its safety, costs, and effectiveness."
        imageSrc="/public/YellowSyringes.avif"
        imageAlt="Sublingual Immunotherapy Product"
        ctaText="Take the free Quiz"
      />
    </section>
  );
}

export default SLHero;
