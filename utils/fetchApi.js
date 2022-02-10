import axios from 'axios'


export const baseUrl="https://bayut.p.rapidapi.com"
export const fetchData = async(url) =>
{
    const { data } = await axios.get( (url), {
        
        headers: {
          'x-rapidapi-host': 'bayut.p.rapidapi.com',
          'x-rapidapi-key': 'c46ff77966msh20d2350ec93ccefp109ba8jsnfc9810f8c39f'
        }
    } )
  return data;
  
} 
