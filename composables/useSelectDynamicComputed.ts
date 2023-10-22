import { type IPeople, type IPlanet } from "nuxt-swapi/dist/runtime/types";

export default async function useSelectDynamicData() {
  const { people, planets } = await useStarWarsApiState();
  return computed(() => {
    const computedPeople = () => {
      if (Array.isArray(people.value)) {
        return people.value.map((value: IPeople) => {
          return {
            text: value.name,
            value: value.name.replace(/\s/g, "_"),
          };
        });
      } else {
        return [];
      }
    };
    const computedPlanet = () => {
      if (Array.isArray(planets.value)) {
        return planets.value.map((value: IPlanet) => {
          return {
            text: value.name,
            value: value.name.replace(/\s/g, "_"),
          };
        });
      } else {
        return [];
      }
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
}
