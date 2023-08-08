import "./Que.css";
import { ReactComponent as Cross } from "../../assets/asset 9.svg";
import Signin from "../signin/Signin";

const Que = () => {
  return (
    <div className="container">
      <h1 className="que-header">Frequently Asked Questions</h1>
      <div>
        <ul className="all-que">
          <li className="list-header">
            <h3 className="flex list-header-h3">
              <button className="list-btn flex">
                <span className="list-header-text">What is Netflix?</span>
                <Cross className="cross-svg"></Cross>
              </button>
            </h3>
            <div className="list-expand">
              <span className="list-expland-text">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices.
                <br />
                <br />
                You can watch as much as you want, whenever you want, without a
                single ad – all for one low monthly price. There's always
                something new to discover, and new TV shows and movies are added
                every week!
              </span>
            </div>
          </li>
          <li className="list-header">
            <h3 className="flex list-header-h3">
              <button className="list-btn flex">
                <span className="list-header-text">
                  How much does Netflix cost?
                </span>
                <Cross className="cross-svg"></Cross>
              </button>
            </h3>
          </li>
          <li className="list-header">
            <h3 className="flex list-header-h3">
              <button className="list-btn flex">
                <span className="list-header-text">Where can I watch?</span>
                <Cross className="cross-svg"></Cross>
              </button>
            </h3>
          </li>
          <li className="list-header">
            <h3 className="flex list-header-h3">
              <button className="list-btn flex">
                <span className="list-header-text">
                  What can I watch on Netflix?
                </span>
                <Cross className="cross-svg"></Cross>
              </button>
            </h3>
          </li>
          <li className="list-header">
            <h3 className="flex list-header-h3">
              <button className="list-btn flex">
                <span className="list-header-text">
                  Is Netflix good for kids?
                </span>
                <Cross className="cross-svg"></Cross>
              </button>
            </h3>
          </li>
        </ul>
      </div>

      <div className="que-after-line">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
      <Signin></Signin>
      <div className="space-after"></div>
    </div>
  );
};

export default Que;
