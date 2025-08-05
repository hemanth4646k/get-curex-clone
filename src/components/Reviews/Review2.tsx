function Review2() {
  return (
    <div style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Curex Success Story: Goodbye, Cat Allergies!</h1>
        <br />
        <iframe
          width="672"
          height="450"
          src="https://www.youtube.com/embed/6Y7tv1EFleI"
          title="Here&#39;s How Cooper Overcame Cat Allergies with Curex!"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div
        style={{
          backgroundColor: "#f6f6f6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img src="/partners.png" alt="" />
        <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>
          “Immunotherapy can be amazing”
        </h1>
        <br />
        <img src="/NewYorkTimesLogo.png" alt="" width={150} />
      </div>
    </div>
  );
}
export default Review2;
