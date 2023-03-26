import axios from "axios";

export const apiFetch = (drink) => {
    const response = axios.get(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drink}`);
    // www.thecocktaildb.com / api / json / v1 / 1 / filter.php ? i = Vodka
    // http://localhost:2222/www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka
    return response
};