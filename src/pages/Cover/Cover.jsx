import PropTypes from "prop-types";

const Cover = ({ coverImg, title, subtitle }) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={coverImgStyle} className="relative">
      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-between text-center px-4 py-10 sm:py-14">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 tracking-wide mb-2">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-gray-400 font-medium tracking-[0.3em] uppercase">
            Portfolio
          </p>
        </div>
        <p className="text-sm sm:text-base text-gray-400 max-w-xs mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

Cover.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Cover;
