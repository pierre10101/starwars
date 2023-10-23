import { useStorage } from "@vueuse/core";
import { IFilm, IPeople, IPlanet } from "nuxt-swapi/dist/runtime/types";
export default function useStarWarsApiState() {
  interface Options {
    [key: string]: any;
  }
  const people = useStorage<IPeople[]>("star_wars_people", []);
  const species = useStorage("star_wars_species", []);
  const planets = useStorage<IPlanet[]>("star_wars_planets", []);
  const starships = useStorage("star_wars_starships", []);
  const vehicles = useStorage("star_wars_vehicles", []);
  const films = useStorage<(IFilm | null)[]>("star_wars_films", []);
  const options = useState<Options>("options", () => ({}));

  const intersection = (...objects: any) => {
    if (objects.length === 1) {
      return objects[0];
    }
    const result: any = {};
    const [firstObject, ...restObjects] = objects;

    for (const key in firstObject) {
      if (restObjects.every((obj: any) => obj.hasOwnProperty(key))) {
        result[key] = firstObject[key];
      }
    }
    return result;
  };

  const urls = computed(() => {
    const planetUrls: Options = {};
    const peopleUrls: Options = {};
    const object: any[] = [];
    if ("Planets" in options.value && planets.value.length > 0) {
      const items = planets.value
        .filter((value) => value.name === options.value["Planets"])
        .map((value) => value.films);
      for (const films of items) {
        for (const film of films) {
          planetUrls[film as string] = film;
        }
      }
      object.push(planetUrls);
    }
    if ("People" in options.value && people.value.length > 0) {
      const items = people.value
        .filter((value) => value.name === options.value["People"])
        .map((value) => value.films);
      for (const films of items) {
        for (const film of films) {
          peopleUrls[film as string] = film;
        }
      }
      object.push(peopleUrls);
    }

    return Object.keys(intersection(...object));
  });

  const selectDynamicData = computed(() => {
    const computedPeople = () => {
      return people.value.map((value: IPeople) => {
        return {
          text: value.name,
          value: value.name,
        };
      });
    };
    const computedPlanet = () => {
      return planets.value.map((value: IPlanet) => {
        return {
          text: value.name,
          value: value.name,
        };
      });
    };
    return [
      {
        data: computedPeople(),
        field: "People",
      },
      {
        data: computedPlanet(),
        field: "Planets",
      },
    ];
  });

  return {
    people,
    species,
    planets,
    starships,
    vehicles,
    films,
    options,
    urls,
    selectDynamicData,
  };
}
