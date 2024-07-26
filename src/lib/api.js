import axios from "axios";

const baseUrl = "https://api.pramodmaloo.com/wp-json/wp/v2";

const api = {
  getheaders: async () => {
    const response = await axios.get(`${baseUrl}/acf-options/header`);
    return response;
  },
  getbanner: async () => {
    const response = await axios.get(`${baseUrl}/pages/10?_fields=acf.banner_section_options&acf_format=standard`);
    return response
  },
  getabout: async () => {
    const response = await axios.get(`${baseUrl}/pages/10?_fields=acf.about_section_options&acf_format=standard`);
    return response
  },
  
};


export default api;