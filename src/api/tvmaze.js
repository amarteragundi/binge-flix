import Axios from "axios";

export default Axios.create({
  baseURL: "http://api.tvmaze.com"
});
