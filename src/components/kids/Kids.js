import "./Kids.css";

const Kids = () => {
  return (
    <div className="kids flex container">
      <div className="kids-txt">
        <h1 className="kids-header">Create profiles for kids</h1>
        <h3 className="kids-extra-text">
          Send children on adventures with their favourite characters in a space
          made just for them—free with your membership.
        </h3>
      </div>
      <div className="kids-img flex">
        <img src={require("../../assets/asset 0.png")} alt="" />
      </div>
    </div>
  );
};

export default Kids;
