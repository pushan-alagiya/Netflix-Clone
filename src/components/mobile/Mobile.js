import "./Mobile.css";

const Mobile = () => {
  return (
    <div className="mobile flex container">
      <div className="mobile-txt">
        <h1 className="mobile-header">Download your shows to watch offline</h1>
        <h3 className="mobile-extra-text">
          Save your favourites easily and always have something to watch.
        </h3>
      </div>
      <div className="mobile-img">
        <img src={require("../../assets/mobile.jpg")} alt="" />
      </div>
    </div>
  );
};

export default Mobile;
