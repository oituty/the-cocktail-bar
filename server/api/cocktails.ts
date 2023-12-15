import { BASE_URL } from './model/apiConfig';
import { ErrorResponse, errorMessageByStatus } from './utils/handler';

export default defineEventHandler(async (event) => {
  const { searchTerm } = getQuery(event);
  const url = `${BASE_URL}/search.php?s=`;
  try {
    const parsedUrl = searchTerm ? `${url}${searchTerm}` : url;
    const response = await fetch(parsedUrl);

    if (response.status === 200) {
      const data = await response.json();

      return {
        status: 200,
        body: data.drinks,
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
