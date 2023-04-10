
import { nyTimesKey } from '@env'

export const fetchData = async () => {
  return await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nyTimesKey}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('You Shall Not Pass!')
    }
  }) 
};
