import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="desktop" style={{ margin: "auto" }}>
        <div
          style={{
            width: "800px",
            backgroundColor: "lightgray",
            borderRadius: "12px",
            padding: "20px",
            margin: "auto",
          }}
        >
          <img
            alt="logo"
            src="https://fsb.edu.vn/wp-content/uploads/2023/06/logo.svg"
            style={{ width: "600px", marginTop: "50px" }}
          />
          <h1>Web mượn/ trả tài sản của hành chính FSB Hồ Chí Minh</h1>
          <p style={{ fontSize: "30px" }}>Bạn muốn mượn hay trả tài sản?</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
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
                fontSize: "22px",
                fontWeight: "bold",
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
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Trả tài sản
            </button>
          </div>
        </div>
      </div>
      <div className="mobile">
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
              fontSize: "22px",
              fontWeight: "bold",
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
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Trả tài sản
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
