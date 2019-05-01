import axios from 'axios';

export async function getAllPersons() {

    try{

        const response = await axios.get("https://swapi.co/api/people/")
        return await response.data.results

    }catch(err){
        console.error(err);
    }

}
