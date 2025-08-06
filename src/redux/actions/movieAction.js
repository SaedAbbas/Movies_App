import { ALLMOVIES ,movieAPI } from "../types/moviesType"
import axios from "axios";

export const getAllMovie =  () => {

    return async (dispatch) => {
        const res = await axios.get(movieAPI);
        console.log(res)
        dispatch({ type:ALLMOVIES , data:res.data.results , pages : res.data.total_pages})
        // دسباتش بمعنى ريتيرن يعني
    }   
    // الريدكس بقبلش حتة الاسنك والاويت الا  استخدم مدلوير اللي هي بتكون بين الاكشن والرديوسر بحيث نضمن انه البيانات وصلت قبل منروح للرديوسر
    // يعني فالريدكس فش اسنك اويت في مدلوير , يعني بنحط اويت او مدلوير بحيث انه الرسبونس ينبعت وهو لسا مش واصل فبدون اويت حيصل الريسبونس فاضي فبتصير مشكلة فلما تحط اويت بتضمن الرسبونس يجيك بعدها بتبعته وين مبدك

}

export const getMovieSearch =  (word) => {

    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=164da79d375606ec7cbb1dcc4ae04ae9&query=${word}&language=ar`);
        dispatch({ type:ALLMOVIES , data:res.data.results , pages : res.data.total_pages})
    }  
}

export const getPage =  (page) => {

    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=164da79d375606ec7cbb1dcc4ae04ae9&language=ar&page=${page}`);
        dispatch({ type:ALLMOVIES , data:res.data.results , pages : res.data.total_pages})
    }   

}