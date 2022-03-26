import axios from 'axios'

interface useFetchProps<T> {
    url:string;
    type:T;
}

export default async function useFetch<T>(props:useFetchProps<T>) {
    try {
       const response = await axios.get(props.url)
    } catch (error) {
        return error
    }
}