import React from "react";
import Axios from "axios";

export default Axios.create({
  baseURL: "http://api.tvmaze.com"
});
