// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperheroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };
// export const useSuperHeroesData = (onSuccess: any, onError: any) => {
//   return useQuery(
//     "super-heroes",
//     fetchSuperheroes,

//     {
//       onSuccess,
//       onError,
//       select: (data) => {
//         const superHeroNames = data.data.map((hero: any) => hero.name);
//         return superHeroNames;
//       },
//     }
//   );
// };
