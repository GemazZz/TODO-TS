import { styled } from "styled-components";
interface StyledDivProps {
  type?: string;
}

export const StyledDiv = styled.div<StyledDivProps>`
  height: 72px;
  width: 600px;
  background-color: ${(props) =>
    props.type === "Personal" ? "rgb(226, 135, 67)" : props.type === "Work" ? "rgb(100, 68, 107)" : "rgb(100, 171, 197)"};
  border: 1px solid black;
  border-radius: 12px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15px;
`;

interface StyledLabelProps {
  isChecked: boolean;
}
export const StyledLabel = styled.label<StyledLabelProps>`
  position: absolute;
  left: 55px;
  color: white;
  font-size: 19px;
  text-decoration: ${(props) => (props.isChecked === true ? "line-through" : "none")};
`;

export const StyledBtn = styled.button`
  background-color: transparent;
  margin: auto 4px;
  width: 40px;
  height: 40px;
  border: none;
`;

export const StyledI = styled.i`
  color: rgb(80, 199, 80);
  transition: 0.15s;
  &:hover {
    scale: 1.15;
  }
  &&:active {
    scale: 0.92;
  }
`;

export const StyledCheckbox = styled.input`
  position: relative;
  left: -140px;
  top: 2px;
  width: 20px;
  height: 20px;
  border: none;
  background-color: green;
  position: relative;
  right: 80px;
`;

export const StyledAbsoluteP = styled.p`
  position: absolute;
  color: white;
  font-size: 18px;
  left: 415px;
`;
