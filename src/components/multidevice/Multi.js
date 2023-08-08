import "./Multi.css";

const Multi = () => {
  return (
    <div className="multi flex container">
      <div className="multi-txt">
        <h1>Watch everywhere</h1>
        <h3 className="multi-extra-text">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </h3>
      </div>
      <div className="multi-img">
        <img src={require("../../assets/device-pile-in.jpg")} alt="" />
      </div>
    </div>
  );
};

export default Multi;
