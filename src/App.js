import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        alt="logo"
        src="https://fsb.edu.vn/wp-content/uploads/2023/06/logo.svg"
        style={{ width: "300px", marginTop: "100px" }}
      />
      <h2>Web mượn/ trả tài sản của hành chính FSB Hồ Chí Minh</h2>
      <p style={{ fontSize: "20px" }}>Bạn muốn mượn hay trả tài sản?</p>
      <div>
        <button
          onClick={() => {
            window.location.href = "https://forms.gle/8tRMZgHRAFxhgQHb6";
          }}
          style={{
            width: 150,
            height: 150,
            border: 1,
            borderRadius: 12,
            backgroundColor: "#0064b4 ",
            color: "white",
            fontSize: "20px",
            marginRight: "20px",
          }}
        >
          Mượn tài sản
        </button>
        <button
          onClick={() => {
            window.location.href = "https://forms.gle/GAVygLb9rfeqRv8Q8";
          }}
          style={{
            width: 150,
            height: 150,
            border: 1,
            borderRadius: 12,
            backgroundColor: "#0fb44b",
            color: "white",
            fontSize: "20px",
          }}
        >
          Trả tài sản
        </button>
      </div>
    </div>
  );
}

export default App;
