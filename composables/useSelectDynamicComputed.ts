import { type IPeople, type IPlanet } from "nuxt-swapi/dist/runtime/types";

export default async function useSelectDynamicComputed() {
  const { people, planets } = await useStarWarsApiState();
  return computed(() => {
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
}
