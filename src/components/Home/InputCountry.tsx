import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import CountryType from "../../../type";

export default function InputCountry() {
  const [allcountries, setAllCountries] = useState<CountryType[]>([]);

  console.log(allcountries);
  useEffect(() => {
    const fetchCoutries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        setAllCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoutries();
  }, []);
  return (
    <MainInputDiv>
      <FormControl fullWidth>
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
`;
