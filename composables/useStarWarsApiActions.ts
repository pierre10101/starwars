const { People, Planets, Films } = useSwapi();
const { people, planets, films, options, urls, isLoading } =
  useStarWarsApiState();
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

  const selectDynamicOption = async (event: { value: string }) => {
    const [index, value] = event.value.split("/");
    options.value[index] = value;
    isLoading.value = true;
    try {
      films.value = await Films.findByUrl(urls.value);
    } catch (error) {
      throw createError({
        statusCode: 404,
        statusMessage: "Cannot find the Movie",
      });
    }
    isLoading.value = false;
  };

  const reload = async () => {
    isLoading.value = true;
    const result = await Films.getAll();
    films.value = result || films.value;
    window.location.reload();
    isLoading.value = false;
  };
  return {
    loadData,
    selectDynamicOption,
    reload,
  };
}
