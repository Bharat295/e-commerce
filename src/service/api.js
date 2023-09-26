import axios from 'axios';
const url = "https://dummyjson.com/products";

export const getallData = async (id) => {
    if (id === 'all') {
        id = '';
    } 
    id = (id === '' ? '' : 'category/' + id);
    // console.log(id);
    // id = '';
    return await axios.get(`${url}/${id}`);
}