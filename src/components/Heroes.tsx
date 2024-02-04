import { useQuery } from "react-query";
import axios from "axios";

export default function Heroes(): JSX.Element {
  const onSucccess = () => {
    console.log("perform side effect after data fetching");
  };

  const onError = () => {
    console.log("perform side effect after encountering error");
  };

  const fetchSuperheroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperheroes,

    {
      onSuccess: onSucccess,
      onError: onError,
    }
  );

  const handleClick = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error("Error while refetching:", error);
    }
  };

  if (isLoading || isFetching) {
    return <h2>Loading.... </h2>;
  }

  if (isError) {
    return <h2>{(error as Error).message}</h2>;
  }

  return (
    <div>
      <button onClick={handleClick}> fetch heroes</button>
      {data?.data.map((item: any) => {
        return <div key={item.name}>{item.name} </div>;
      })}
    </div>
  );
}
