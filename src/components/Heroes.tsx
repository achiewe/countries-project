import { useQuery } from "react-query";
import axios from "axios";

export default function Heroes(): JSX.Element {
  const fetchSuperheroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperheroes,
    {
      enabled: false,
    }
  );

  if (isLoading) {
    return <h2>Loading.... </h2>;
  }

  if (isError) {
    return <h2>{(error as Error).message}</h2>;
  }

  return (
    <div>
      {data?.data.map((item: any) => {
        return <div key={item.name}>{item.name} </div>;
      })}
    </div>
  );
}
