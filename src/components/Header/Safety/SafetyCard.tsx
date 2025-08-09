function SafetyCard({
  imgSrc,
  heading,
  desc,
}: {
  imgSrc: string;
  heading: string;
  desc: string;
}) {
  return (
    <div
      style={{
        gridColumnGap: "1rem",
        backgroundColor: "#f6f6f6",
        borderRadius: "1rem",
        flexDirection: "column",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        width: "100%",
        maxWidth: "25rem",
        height: "auto",
        fontSize: "1rem",
        lineHeight: 1.5,
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "13.75rem" }}>
        <img
          src={imgSrc}
          alt=""
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ padding: "1rem" }}>
        <h3
          style={{
            marginTop: 0,
            marginBottom: 0,
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: 1.3,
          }}
        >
          {heading}
        </h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
export default SafetyCard;
