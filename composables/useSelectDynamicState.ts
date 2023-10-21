import { useStorage } from "@vueuse/core";
import { IPeople, IPlanet } from "nuxt-swapi/dist/runtime/types";
export default async function useSelectDynamicState() {
  const people = useStorage<IPeople[] | []>("star_wars_people", []);
  const species = useStorage("star_wars_species", []);
  const planets = useStorage<IPlanet[] | []>("star_wars_planets", []);
  const starships = useStorage("star_wars_starships", []);
  const vehicles = useStorage("star_wars_vehicles", []);
  return {
    people,
    species,
    planets,
    starships,
    vehicles,
  };
}
