import { ToggleButtonWrapper } from "../styles";
import "../test.scss";

function ToggleButton() {
  return (
    <ToggleButtonWrapper>
      <input type="checkbox" id="c3d" />
      <label for="c3d">light</label>
    </ToggleButtonWrapper>
  );
}

export default ToggleButton;
