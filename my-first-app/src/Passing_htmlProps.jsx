function PassingHtmlProps({ children, color="Yellow" }) {
    return (
      <div
        // style={{
        //   color: "yellow",
        //   border: "3px solid blue",
        //   width: "300px",
        //   margin: "10px",
        //   textAlign: "center", // Centers the text horizontally
        //   display: "flex",    // Adds flexbox
        //   flexDirection: "column", // Aligns items in a column
        //   justifyContent: "center", // Centers items vertically
        //   alignItems: "center", // Centers items horizontally
        //   height: "100px", // Optional: Add height if vertical centering is needed
        // }}
      >
        {children}
      </div>
    );
  }
  export default PassingHtmlProps;