import axios from "axios";

const baseUrl = "https://api.pramodmaloo.com/wp-json/wp/v2";

const api = {
  getheaders: async () => {
    const response = await axios.get(`${baseUrl}/acf-options/header`);
    return response;
  },
  getbanner: async () => {
    const response = await axios.get(
      `${baseUrl}/pages/10?_fields=acf.banner_section_options&acf_format=standard`
    );
    return response;
  },
  getabout: async () => {
    const response = await axios.get(
      `${baseUrl}/pages/10?_fields=acf.about_section_options&acf_format=standard`
    );
    return response;
  },
  getproject: async () => {
    const response = await axios.get(`${baseUrl}/book`);
    return response;
  },
  getpstsectionheading: async () => {
    const response = await axios.get(
      `${baseUrl}/pages/10?_fields=acf.posts_options`
    );
    return response;
  },
  getpost: async () => {
    const response = await axios.get(`${baseUrl}/posts`);
    return response;
  },

  getbrands: async () => {
    const response = await axios.get(
      `${baseUrl}/pages/10?_fields=acf.our_brand_options&acf_format=standard`
    );
    return response;
  },
  getContacts: async () => {
    const response = await axios.get(
      `${baseUrl}/pages/10?_fields=acf.contact_options&acf_format=standard`
    );
    return response;
  },
  getfooter: async () => {
    const response = await axios.get(`${baseUrl}/acf-options/footer`);
    return response;
  },
  getsocialicon: async () => {
    const response = await axios.get(`${baseUrl}/acf-options/social-media`);
    return response;
  },

  getInnerDetails: async (name) => {
    const response = await axios.get(`${baseUrl}/book/${name}`);
    return response;
  },
};

export default api;
