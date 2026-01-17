import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src="/nyan.gif"></img>
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="button-container">
          <div className="button">TWEET</div>
          <img src="/triangle.svg" className="triangle"></img>
        </div>
        <div className="button-container">
          <div className="button">SAVE ME</div>
          <img src="/triangle.svg" className="triangle"></img>
        </div>
        <div className="button">LOGIN</div>
        <div style={{ paddingRight: "40px" }}></div>
      </div>
    </div>
  );
}

export default Header;
