import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function Heroes(): JSX.Element {
  const { isLoading, data } = useQuery("super-heroes", () => {
    return axios.get("http://localhost:4000/superheroes");
  });
  if (isLoading) {
    <h2>Loading.... </h2>;
  }

  return (
    <div>
      {data?.data.map((item: any) => {
        return <div key={item.name}>{item.name} </div>;
      })}
    </div>
  );
}
