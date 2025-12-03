import React, { useState } from "react";

const MusicInput = () => {
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [activity, setActivity] = useState("");
  const [note, setNote] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ mood, genre, activity, note });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Music Recommendation</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Mood
          <input
            type="text"
            placeholder="chill, happy, sad..."
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Favorite genre
          <input
            type="text"
            placeholder="lofi, rock, hip‑hop..."
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          What are you doing?
          <input
            type="text"
            placeholder="studying, workout, commute..."
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            style={styles.input}
          />
        </label>

        <label style={styles.label}>
          Anything specific?
          <textarea
            placeholder="artist / tempo / language etc."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{ ...styles.input, height: "70px", resize: "vertical" }}
          />
        </label>

        <button type="submit" style={styles.button}>
          Get recommendation
        </button>
      </form>

      {submittedData && (
        <div style={styles.resultBox}>
          <h3 style={styles.resultTitle}>Your preferences</h3>
          <p>Mood: {submittedData.mood || "—"}</p>
          <p>Genre: {submittedData.genre || "—"}</p>
          <p>Activity: {submittedData.activity || "—"}</p>
          <p>Details: {submittedData.note || "—"}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "420px",
    margin: "2rem auto",
    padding: "1.5rem",
    borderRadius: "12px",
    border: "1px solid #222",
    background: "#05070b",
    color: "#f5f5f5",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  title: {
    marginBottom: "1rem",
    fontSize: "1.4rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontSize: "0.9rem",
    gap: "0.25rem",
  },
  input: {
    padding: "0.5rem 0.6rem",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#0b0f19",
    color: "#f5f5f5",
    fontSize: "0.9rem",
  },
  button: {
    marginTop: "0.75rem",
    padding: "0.55rem 0.8rem",
    borderRadius: "999px",
    border: "none",
    background:
      "linear-gradient(135deg, #1db954 0%, #1ed760 40%, #1db9ff 100%)",
    color: "#050505",
    fontWeight: 600,
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "1.25rem",
    padding: "0.9rem",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#080c14",
    fontSize: "0.9rem",
  },
  resultTitle: {
    marginBottom: "0.4rem",
    fontSize: "1rem",
  },
};

export default MusicInput;
