// import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

// // function Heroes which return jsx element
// export default function Heroes(): JSX.Element {
//   const onSuccess = (data: any): void => {
//     console.log("perform side effect after data fetching", data);
//   };

//   const onError = (data: any): void => {
//     console.log("perform side effect after encountering error", data);
//   };

//   const { isLoading, data, isError, error, isFetching, refetch } =
//     useSuperHeroesData(onSuccess, onError);

//   const handleClick = async () => {
//     try {
//       await refetch();
//     } catch (error) {
//       console.error("Error while refetching:", error);
//     }
//   };

//   if (isLoading || isFetching) {
//     return <h2>Loading.... </h2>;
//   }

//   if (isError) {
//     return <h2>{(error as Error).message}</h2>;
//   }

//   return (
//     <div>
//       <button onClick={handleClick}> fetch heroes</button>
//       {/* {data?.data.map((item: any) => {
//         return <div key={item.name}>{item.name} </div>;
//       })} */}
//       {data.map((heroName: any) => {
//         return <div key={heroName}>{heroName} </div>;
//       })}
//     </div>
//   );
// }
