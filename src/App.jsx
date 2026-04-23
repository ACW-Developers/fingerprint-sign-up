import Book from "./components/Book";
import BgTexture from "./assets/brown-wooden-flooring.jpg";

const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};
const App = () => {
  return (
    <div
      style={BgTextureStyle}
      className="w-auto min-h-screen flex justify-center items-center"
    >
      <Book />
    </div>
  );
};

export default App;