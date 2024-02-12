import { RAPID_API_KEY } from "@env";
import axios from "axios";

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url: any) => {
    try {
        const options = {
            method: 'GET',
            url,
            // params,
            headers: {
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }

        };
        const response = await axios.request(options);
        return response.data;
    } catch (err: any) {
        console.log('error: ', err.message);
    }
}

export const fetchExercisesByBodypart = async (bodyPart: string) => {
    let data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`)
    return data;
}