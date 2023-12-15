import { BASE_URL } from './model/apiConfig';
import { Cocktail } from './model/cocktail';

import { ErrorResponse, errorMessageByStatus } from './utils/handler';

interface CocktailApiResponse extends Response {
  drinks: Cocktail[];
}

interface CocktailResponse {
  status: number;
  error?: string;
  body?: Cocktail;
}

export default defineEventHandler(async (event): Promise<CocktailResponse> => {
  const { id } = getQuery(event);
  if (!id) {
    throw { message: 'Missing cocktail id', status: 404 };
  }

  const url = `${BASE_URL}/lookup.php?i=${id}`;

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data: CocktailApiResponse = await response.json();

      return {
        status: 200,
        body: data.drinks?.[0],
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
