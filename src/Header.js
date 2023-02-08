//just type rafce, then enter. Command + Shift + R doesn't work, for some reason

const Header = ({ title }) => {
  //   const headerStyle = {
  //     backgroundColor: "royalblue",
  //     color: "#fff",
  //   };
  return (
    // <header style={headerStyle}>
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

export default Header;
