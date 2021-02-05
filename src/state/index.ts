import { atom, selector } from 'recoil';
import { fetchCategories } from '../api/Analysis';

export const categoriesState = atom({
  key: 'categoryState',
  default: fetchCategories()
});

export const selectedCategoryName = atom<CategoryName>({
  key: 'selectedCategoryName',
  default: 'Популярное'
});

export const searchState = atom({
  key: 'searchState',
  default: ''
})

export const analysisState = selector({
  key: 'analysisState',
  get: ({ get }) => {
    const categories = get(categoriesState),
          selectedCategory = get(selectedCategoryName),
          searchString = get(searchState);

    if (!searchString) {
      const category = categories.find(category => category.name === selectedCategory);
      return category?.analysisProducts.slice(0, 9);
    }

    const allAnalysis = categories.flatMap(category => category.analysisProducts);

    // Removing all duplicates
    const analysisIds = allAnalysis.map(a => a.id);
    const filteredAnalysis = allAnalysis.filter(({ id }, i) => !analysisIds.includes(id, i + 1));

    // Returning matched analysis
    return filteredAnalysis.filter(a => a.name.toLowerCase().includes(searchString.toLowerCase())).slice(0, 9);
  }
});

export const selectedAnalysisState = atom<AnalysisData[]>({
  key: 'selectedAnalysisState',
  default: []
});


const steps = [
  {
    id: 1,
    title: 'Выбор исследований'
  },
  {
    id: 2,
    title: 'Оформление заказа'
  },
  {
    id: 3,
    title: 'Корзина'
  }
];

export const stepState = atom<Steps>({
  key: 'stepState',
  default: steps
});

export const activeStepState = atom({
  key: 'activeStepState',
  default: 1
});