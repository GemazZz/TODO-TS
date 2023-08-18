import { styled } from "styled-components";

export const StyledBodyDiv = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  top: 50px;
`;

export const StyledDiv = styled.div`
  width: 600px;
  height: 650px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const StyledHeader = styled.div`
  background-color: rgb(80, 76, 72);
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  width: 600px;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledMain = styled.div`
  width: 600px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  scrollbar-width: 1px;
`;
export const StyledH1 = styled.h1`
  font-size: 45px;
  color: white;
  font-family: "Times New Roman", Times, serif;
`;
export const StyledBtn = styled.button`
  color: white;
  background-color: rgb(60, 159, 60);
  z-index: 10;
  border: 2 solid gray;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: 0.15s;
  &&:hover {
    scale: 1.1;
  }
  &&:active {
    scale: 0.9;
  }
`;

export const StyledSelect = styled.select`
  position: relative;
  left: 85px;
  width: 100px;
  height: 40px;
  background-color: rgb(116, 110, 104);
  border-radius: 10px;
`;
export const StyledInput = styled.input`
  position: relative;
  width: 230px;
  height: 30px;
  color: white;
  background-color: rgb(116, 110, 104);
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const StyledAddDiv = styled.div`
  position: absolute;
  width: 500px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 160px;
  align-self: center;
  border: 2px solid black;
  border-radius: 35px;
  background-color: rgb(80, 76, 72);
  z-index: 100;
`;
interface StyledProps {
  type?: string;
}
export const StyledTypeBtn = styled.button<StyledProps>`
  width: 100px;
  height: 30px;
  margin: 20px;
  border-radius: 10px;
  color: #ffffff;
  background-color: rgb(116, 110, 104);
  transition: 0.15s;
  &&:hover {
    scale: 1.1;
    background-color: ${(props) =>
      props.type === "Personal"
        ? "rgb(226, 135, 67)"
        : props.type === "Work"
        ? "rgb(100, 68, 107)"
        : props.type === "Others"
        ? "rgb(100, 171, 197)"
        : "rgb(60, 159, 60)"};
  }
  &&:active {
    scale: 1;
  }
`;
