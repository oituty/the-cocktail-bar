export const errorMessageByStatus = (status: 404 | 500 | number) => {
  switch (status) {
    case 404:
      return 'Content not found, try again';
    case 500:
      return 'Internal server error, try again';
    default:
      return 'Error to load content, try again';
  }
};

export function errorResponse(error: any): ErrorResponse {
  return {
    status: error?.status || 500,
    error: error?.message,
  };
}

export interface ErrorResponse {
  status: number;
  error: string;
}
