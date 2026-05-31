export default function CoCreativePage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ marginBottom: "32px" }}>
        Co-Creative Field
      </h1>

      <section
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Experience Input</h2>

        <textarea
          placeholder="What experience would you like to explore?"
          style={{
            width: "100%",
            minHeight: "150px",
            marginTop: "12px",
            padding: "12px",
          }}
        />

        <button
          style={{
            marginTop: "12px",
            padding: "10px 20px",
          }}
        >
          Explore
        </button>
      </section>

      <section
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Dialogue</h2>

        <p>AI dialogue will appear here.</p>
      </section>

      <section
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Canonical Description</h2>

        <p>Living document will appear here.</p>
      </section>

      <section
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Emerging Insights</h2>

        <p>Insights will appear here.</p>
      </section>
    </main>
  );
}
