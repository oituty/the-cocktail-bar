export enum SearchCocktailsType {
  SEARCH_ALL = "SEARCH_ALL",
  SEARCH_BY_CATEGORY = 'SEARCH_BY_CATEGORY',
}

export const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';


export const UrlBySearchCocktailsType: Record<SearchCocktailsType, string> = {
  [SearchCocktailsType.SEARCH_ALL]: "search.php?s=",
  [SearchCocktailsType.SEARCH_BY_CATEGORY]: "filter.php?c=",
}

export const getCocktailsUrlByQuery = (queryType: SearchCocktailsType, category?: string, searchTerm?: string) => {
  
  if (queryType === SearchCocktailsType.SEARCH_BY_CATEGORY) {
    return `${UrlBySearchCocktailsType[queryType]}${category}`
  }

  return `${UrlBySearchCocktailsType[queryType]}${searchTerm || ''}`
}