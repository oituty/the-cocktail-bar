import { BASE_URL } from './model/apiConfig';

import { ErrorResponse, errorMessageByStatus } from './utils/handler';

export default defineEventHandler(async (event) => {
  const url = `${BASE_URL}/list.php?c=list`;
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();

      return {
        status: 200,
        body: data.drinks.map((category: { strCategory: string }) => category.strCategory),
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
