export default function useStarWarsApiActions() {
  const { People, Planets, Films, Species, Vehicles, Starships } = useSwapi();
  const { people, planets, species, vehicles, starships, films, options } =
    useStarWarsApiState();
  const loadData = async () => {
    if (films.value.length === 0) {
      const result = await Films.getAll();
      films.value = result || films.value;
    }
    if (people.value.length === 0) {
      const result = await People.getAll();
      people.value = result || people.value;
    }
    if (planets.value.length === 0) {
      const result = await Planets.getAll();
      planets.value = result || planets.value;
    }
    if (species.value.length === 0) {
      const result = await Species.getAll();
      species.value = result || species.value;
    }
    if (vehicles.value.length === 0) {
      const result = await Vehicles.getAll();
      vehicles.value = result || vehicles.value;
    }
    if (starships.value.length === 0) {
      const result = await Starships.getAll();
      starships.value = result || starships.value;
    }
  };

  const selectDynamicOption = (event: { value: string }) => {
    const [index, value] = event.value.split("/");
    options.value[index] = value;
  };

  const reload = () => {
    options.value = {};
  };
  return {
    reload,
    loadData,
    selectDynamicOption,
  };
}
