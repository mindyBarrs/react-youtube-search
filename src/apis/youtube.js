import axios from "axios";

const KEY = "AIzaSyB0YWjThE9E5AuslVwXDNlGEKVLf7zzrzQ";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});