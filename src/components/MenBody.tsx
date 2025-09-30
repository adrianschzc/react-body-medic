import "../styles/menbody.css";
import "../styles/variables.css";
import MenBodySvgComponent from "./MenBodySvgComponent";
import MenBackBodySvgComponent from "./MenBackBodySvgComponent";

interface HumanBodyProps {
  onSelect?: (part: string) => void; // callback cuando el usuario hace click
}

const HumanBody = ({ onSelect }: HumanBodyProps) => {
  return (
    <div>
      <div className="sc-body-model evidence-search-body-widget__body-model">
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <MenBodySvgComponent onSelect={onSelect} />
          </div>
          <div>
            <MenBackBodySvgComponent onSelect={onSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanBody;
