import { useEffect, useState } from "react";
import {
  StyledDiv,
  StyledHeader,
  StyledMain,
  StyledH1,
  StyledBtn,
  StyledSelect,
  StyledAddDiv,
  StyledBodyDiv,
  StyledInput,
  StyledTypeBtn,
} from "../styles/Content";
import Item from "./Item";

const Content = () => {
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [type, setType] = useState<string>("false");
  const [notValid, setNotValid] = useState<number>(0);
  const [data, setData] = useState(localStorage.getItem("data"));
  const [parseData, setParseData] = useState(data ? JSON.parse(data) : []);

  interface Todo {
    id: number;
    text: string;
    type: string;
    isChecked: boolean;
  }

  const newTodo: Todo = {
    id: new Date().getTime(),
    text,
    type,
    isChecked: false,
  };

  const dltItem = (id: number) => {
    const newData = parseData.filter((item: Todo) => item.id !== id);
    setParseData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <StyledBodyDiv
      onClick={() => {
        setIsAddOpen(false);
        setType("");
      }}
    >
      <StyledDiv>
        <StyledHeader>
          <StyledH1>TODO</StyledH1>
          <StyledSelect>
            <option value="ShowAll" selected>
              Show All
            </option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Others">Others</option>
          </StyledSelect>
          <StyledBtn
            onClick={(e) => {
              e.stopPropagation();
              setIsAddOpen(true);
            }}
          >
            <i className="fa-solid fa-plus fa-2xl" style={{ color: "#ffffff" }}></i>
          </StyledBtn>
        </StyledHeader>
        {isAddOpen && (
          <StyledAddDiv
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h1 style={{ color: "white", position: "relative", top: "-15px" }}>New TODO</h1>
            <StyledInput
              type="text"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <div>
              <StyledTypeBtn
                type="Personal"
                onClick={() => {
                  setType("Personal");
                }}
                style={type === "Personal" ? { color: "#ffffff", backgroundColor: "rgb(226, 135, 67)" } : {}}
              >
                Personal
              </StyledTypeBtn>
              <StyledTypeBtn
                type="Work"
                onClick={() => {
                  setType("Work");
                }}
                style={type === "Work" ? { color: "#ffffff", backgroundColor: "rgb(100, 68, 107)" } : {}}
              >
                Work
              </StyledTypeBtn>
              <StyledTypeBtn
                type="Others"
                onClick={() => {
                  setType("Others");
                }}
                style={type === "Others" ? { color: "#ffffff", backgroundColor: "rgb(100, 171, 197)" } : {}}
              >
                Others
              </StyledTypeBtn>
            </div>
            <StyledTypeBtn
              onClick={() => {
                const data = localStorage.getItem("data");
                const parseData = data ? JSON.parse(data) : [];
                const newArr = [newTodo, ...parseData];
                localStorage.setItem("data", JSON.stringify(newArr));
                setParseData(newArr);
                setText("");
                setType("");
                setIsAddOpen(false);
              }}
            >
              Add
            </StyledTypeBtn>
          </StyledAddDiv>
        )}

        <StyledMain>
          <Item parseData={parseData} dltItem={dltItem} />
        </StyledMain>
      </StyledDiv>
    </StyledBodyDiv>
  );
};

export default Content;
