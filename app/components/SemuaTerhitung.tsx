function SemuaTerhitung() {
  return (
    <section
      style={{
        background: "var(--pallet-cream)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-averia)",
          fontSize: "var(--text-header)",
          fontWeight: 400,
          lineHeight: 1.2,
          textAlign: "center",
          background:
            "linear-gradient(90deg, var(--pallet-dark-blue), var(--pallet-purple))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Semua Terhitung...
      </h2>
    </section>
  );
}

export default SemuaTerhitung;