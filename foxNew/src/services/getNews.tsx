import { Alert } from "react-native";
import { newsApi } from "../config/Axios.config";
import { INews } from "../interfaces/INews";

const ENPOINT = 'everything'
const APIKEY = '3147780120b54fbf9863e12692dcdb92';
export async function getNews(pageSize: number, page: number) {
  try {
    const response = await newsApi.get<INews>(
      `${ENPOINT}?q=bitcoin&apiKey=${APIKEY}&pageSize=${pageSize}&page=${page}`
    );

    return {
      data: response.data
    }
  } catch (error: any) {
    console.log(error)
    Alert.alert('Error no se encontraron Noticias', error.message)
  }
}