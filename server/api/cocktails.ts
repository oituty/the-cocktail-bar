//Listar coquetéis sem filtro ou por searchTerm e categoryName

import {
  BASE_URL,
  getCocktailsUrlByQuery,
  SearchCocktailsType,
} from './model/apiConfig';
import { Cocktail } from './model/cocktail';
import {
  formatCocktailsByCategory,
  formatCocktailsByQuery,
} from './utils/apiResponse';
import { ErrorResponse, errorMessageByStatus } from './utils/handler';

export default defineEventHandler(async (event) => {
  const { searchTerm, category } = getQuery(event) as {
    searchTerm?: string;
    category?: string;
  };
  const queryType = category
  ? SearchCocktailsType.SEARCH_BY_CATEGORY
  : SearchCocktailsType.SEARCH_ALL;

  const url = `${BASE_URL}/${getCocktailsUrlByQuery(queryType, category, searchTerm )}`;

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();

      return {
        status: 200,
        body: formatCocktailsByQuery(data.drinks, queryType, category),
      };
    }

    throw {
      message: errorMessageByStatus(response.status),
      status: response.status,
    };
  } catch (error: ErrorResponse | any) {
    console.error(error);

    return {
      status: error?.status || 500,
      error: error?.message,
    };
  }
});
