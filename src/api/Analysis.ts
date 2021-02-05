export async function fetchCategories() {
  try {
    // Включен CORS
    //const response = await fetch('https://dev.lifetime.plus/api/analysis');

    // Данные из локальной копии
    const response = await fetch('data.json');
    const data = await response.json() as AnalysisResponse;

    return data.categories;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}