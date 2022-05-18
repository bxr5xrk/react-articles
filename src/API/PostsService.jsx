import axios from "axios";

export default class PostService {
    static async getPosts() {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
