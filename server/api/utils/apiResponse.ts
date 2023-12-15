import { SearchCocktailsType } from "../model/apiConfig";
import { Cocktail } from "../model/cocktail";

export function formatCocktailsByQuery(drinks: Cocktail[], queryType: SearchCocktailsType, categorySearch?: string) {
    switch (queryType) {
        case SearchCocktailsType.SEARCH_BY_CATEGORY:
            return formatCocktailsByCategory(drinks, categorySearch ?? "")    
        default:
            return drinks;
    }
}

export function formatCocktailsByCategory(drinks: Cocktail[], categorySearch: string) {
    return drinks.map((drink: Cocktail)=> {return {...drink, strCategory: drink?.strCategory || categorySearch}})
}