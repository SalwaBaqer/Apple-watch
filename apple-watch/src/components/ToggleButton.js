import { ToggleButtonWrapper, ToggleWrapperStyled } from "../styles";
import "../test.scss";

function ToggleButton({ isEmpty, setisEmpty }) {
  return (
    <ToggleWrapperStyled>
      <ToggleButtonWrapper>
        <input
          type="checkbox"
          id="c3d"
          onClick={() => (isEmpty ? setisEmpty(false) : setisEmpty(true))}
        />
        <label for="c3d">light</label>
      </ToggleButtonWrapper>
    </ToggleWrapperStyled>
  );
}

export default ToggleButton;
