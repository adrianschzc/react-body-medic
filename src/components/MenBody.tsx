import "../../styles/menbody.css";
import "../../styles/variables.css";
import MenBodySvgComponent from "./MenBodySvgComponent";
import MenBackBodySvgComponent from "./MenBackBodySvgComponent";

const HumanBody = () => {
  return (
    <div>
      <div className="sc-body-model evidence-search-body-widget__body-model">
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
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
