"use client";

import { useState } from "react";

export default function CoCreativePage() {
  const [experience, setExperience] = useState("");
  const [explored, setExplored] = useState(false);

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <h1>Co-Creative Field</h1>

      <section>
        <h2>Experience Input</h2>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="What experience would you like to explore?"
          rows={10}
          style={{ width: "100%", padding: "12px" }}
        />
        <br />
        <br />
        <button onClick={() => setExplored(true)}>Explore</button>
      </section>

      <section>
        <h2>Dialogue</h2>
        {explored ? (
          <p>
            どの場面が最も強く心に残っていますか？
            <br />
            1. お婆ちゃんが「ようこ！」と呼んだ瞬間
            <br />
            2. 抱きしめようと近づいてきた瞬間
            <br />
            3. 抱きしめ合っていた時間
          </p>
        ) : (
          <p>AI dialogue will appear here.</p>
        )}
      </section>

      <section>
        <h2>Canonical Description</h2>
        {explored ? (
          <pre style={{ whiteSpace: "pre-wrap" }}>{experience}</pre>
        ) : (
          <p>Living document will appear here.</p>
        )}
      </section>

      <section>
        <h2>Emerging Insights</h2>
        {explored ? (
          <p>
            Possible Theme:
            <br />
            Reunion / Love / Recognition
          </p>
        ) : (
          <p>Insights will appear here.</p>
        )}
      </section>
    </main>
  );
}
  );
}
