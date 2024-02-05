import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import styled from "styled-components";

export default function InputCountry() {
  return (
    <MainInputDiv>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{ color: "black" }}>
          achi
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          value={10}
        >
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
    </MainInputDiv>
  );
}

const MainInputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
