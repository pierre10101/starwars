const { People, Planets, Films } = useSwapi();
const { people, planets, films, options } = useStarWarsApiState();
export default function useStarWarsApiActions() {
  const loadData = async () => {
    try {
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
    } catch (error) {
      throw createError({
        statusCode: 404,
        statusMessage: "Cannot find the Movie",
      });
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
