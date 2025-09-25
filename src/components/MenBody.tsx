import "./menbody.css";
import "./variables.css";
import MenBodySvgComponent from "./MenBodySvgComponent";
import MenBackBodySvgComponent from "./MenBackBodySvgComponent";

const HumanBody = () => {
  return (
    <div>
      <div className="sc-body-model evidence-search-body-widget__body-model">
        <div className="flex gap-2">
          <div className="">
            <MenBodySvgComponent />
          </div>
          <div>
            <MenBackBodySvgComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanBody;
