function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",   // centers horizontally
        justifyContent: "center", // centers vertically
        minHeight: "80vh",       // gives vertical space
        padding: "2rem",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Contact Us</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        If you have questions, suggestions, or feedback, fill out the form below:
      </p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "500px", // slightly bigger
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{ padding: "0.75rem", fontSize: "1rem" }}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          style={{ padding: "0.75rem", fontSize: "1rem" }}
        />
        <textarea
          placeholder="Your Message"
          rows="6"
          style={{ padding: "0.75rem", fontSize: "1rem" }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            fontSize: "1rem",
            backgroundColor: "#ff6347",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
