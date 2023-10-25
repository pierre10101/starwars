import { useStorage } from "@vueuse/core";
import { IFilm, IPeople, IPlanet } from "nuxt-swapi/dist/runtime/types";
export default function useStarWarsApiState() {
  interface Options {
    [key: string]: unknown;
  }
  const isLoading = useState("is-loaded", () => true);
  const people = useStorage<IPeople[]>("star_wars_people", []);
  const species = useStorage("star_wars_species", []);
  const planets = useStorage<IPlanet[]>("star_wars_planets", []);
  const starships = useStorage("star_wars_starships", []);
  const vehicles = useStorage("star_wars_vehicles", []);
  const films = useStorage<(IFilm | null)[]>("star_wars_films", []);
  const options = useStorage<Options>("options", {});

  const intersection = (...urls: Options[]) => {
    if (urls.length === 1) {
      return urls[0];
    }
    if (urls.length === 0) {
      return {};
    }
    const result: Options = {};
    const [firstObject, ...restArray] = urls;

    for (const selection of restArray) {
      for (const item of Object.keys(selection)) {
        if (firstObject[item]) {
          result[item] = item;
        }
      }
    }
    return result;
  };

  const urls = computed(() => {
    const planetUrls: Options = {};
    const peopleUrls: Options = {};
    const urls: any[] = [];
    if ("Planets" in options.value && planets.value.length > 0) {
      const items = planets.value
        .filter((value) => value.name === options.value.Planets)
        .map((value) => value.films);
      for (const films of items) {
        for (const film of films) {
          planetUrls[film as string] = film;
        }
      }
      urls.push(planetUrls);
    }
    if ("People" in options.value && people.value.length > 0) {
      const items = people.value
        .filter((value) => value.name === options.value.People)
        .map((value) => value.films);
      for (const films of items) {
        for (const film of films) {
          peopleUrls[film as string] = film;
        }
      }
      urls.push(peopleUrls);
    }

    return Object.keys(intersection(...urls));
  });

  const selectDynamicData = computed(() => {
    const computedPeople = () => {
      return people.value.map((value: IPeople) => {
        return {
          text: value.name,
          value: value.name,
          selected: value.name === options.value?.People,
        };
      });
    };
    const computedPlanet = () => {
      return planets.value.map((value: IPlanet) => {
        return {
          text: value.name,
          value: value.name,
          selected: value.name === options.value?.Planets,
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

  const filteredFilms = computed(() => {
    if (films.value.length > 0) {
      return films.value.filter((item) =>
        urls.value.includes(item?.url === undefined ? "" : item.url),
      );
    }
    return [];
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
    isLoading,
    filteredFilms,
  };
}
