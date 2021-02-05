type CategoryName = 'Популярное' | 'Комплексное' | 'Биохимия'
                    | 'Иммунитет' | 'Витамины' | 'Металлы и микроэлементы'
                    | 'Антитела' | 'Гормоны' | 'Анализ мочи' | 'Аллергены' | 'Другие';

type AnalysisData = {
  code: string;
  name: string;
  synonyms: string[];
  price: number;
  days: number;
  biomaterial: string;
  description: string;
  id: string;
  defaultCategories: string[];
  checkupCategories: string[];
}

type CategoryData = {
  name: CategoryName;
  description: null | string;
  iconUrl: string;
  analysisProducts: AnalysisData[];
}

type AnalysisResponse = {
  deliver: null;
  minAmount: number;
  categories: CategoryData[];
}

type StepData = {
  id: number;
  title: string;
}

type Steps = StepData[];