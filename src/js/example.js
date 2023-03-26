import { apiFetch } from "./api"

export const example =
  () => `Sensible webpack 5 boilerplate using Babel and PostCSS with a hot dev server 
  and an optimized production build.`



const searchCoctail = async (drink) => {
    try {
        const response = await apiFetch(drink);
        console.log(response);
    } catch (error) {
        console.log(error);
    };
};

searchCoctail('Vodka');