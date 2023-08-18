import { StyledDiv, StyledLabel, StyledBtn, StyledI, StyledCheckbox, StyledAbsoluteP } from "../styles/Item";
interface ItemProps {
  parseData?: Array<{ id: string; type: string; text: string; isChecked: boolean }>;
  dltItem?: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ parseData, dltItem }) => {
  return (
    <>
      {parseData &&
        parseData.map((item) => (
          <StyledDiv key={item.id} type={item.type}>
            <StyledCheckbox id={item.id} type="checkbox" />
            <StyledLabel htmlFor={item.id} isChecked={item.isChecked}>
              {item.text}
            </StyledLabel>
            <StyledAbsoluteP>{item.type}</StyledAbsoluteP>
            <div style={{ position: "relative", left: "140px" }}>
              <StyledBtn>
                <StyledI className="fa-solid fa-file-pen fa-2xl" style={{ color: "rgb(255, 250, 91)" }} />
              </StyledBtn>
              <StyledBtn>
                <StyledI
                  className="fa-solid fa-trash fa-2xl"
                  style={{ color: "red" }}
                  onClick={() => {
                    if (dltItem) {
                      dltItem(parseInt(item.id));
                    }
                  }}
                ></StyledI>
              </StyledBtn>
            </div>
          </StyledDiv>
        ))}
    </>
  );
};

export default Item;
