import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";
const _token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1yZ2p1bmUiLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU4MjgzMDUyOX0.2XMLYXjh27PNry06pGi7XAXrCk2H33jArSdrPLYXRCw";

class BooklyApi {
  static async request(endpoint, params = {}, verb = "get") {
    // for now, hardcode a token for user "testuser"
    // let _token = localStorage.getItem("jobly-token");

    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(`${BASE_URL}/${endpoint}`, { params });
    } else if (verb === "post") {
      q = axios.post(`${BASE_URL}/${endpoint}`, { _token, ...params });
    } else if (verb === "patch") {
      q = axios.patch(`${BASE_URL}/${endpoint}`, { _token, ...params });
    }

    try {
      return (await q).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getBooks(searchTerm, searchCategory, school) {
    let res;
    let parameters = {};
    parameters.school_handle = school;
    if (searchCategory === "Title") {
      parameters.title = searchTerm;
    } else if (searchCategory === "Subject") {
      parameters.subject = searchTerm;
    } else if (searchCategory === "Author") {
      parameters.author = searchTerm;
    }
    console.log(parameters);
    res = await this.request("books", parameters);

    return res.books;
  }

  static async getBook(isbn) {
    let res = await this.request(`books/${isbn}`);
    return res.book;
  }

  //   static async getJobs(search) {
  //     let res = await this.request("jobs", { search });
  //     return res.jobs;
  //   }

  //   static async applyToJob(id) {
  //     let res = await this.request(`jobs/${id}/apply`, {}, "post");
  //     return res.message;
  //   }

  //   static async login(data) {
  //     let res = await this.request(`login`, data, "post");
  //     return res.token;
  //   }

  //   static async register(data) {
  //     let res = await this.request(`users`, data, "post");
  //     return res.token;
  //   }

  //   static async getCurrentUser(username) {
  //     let res = await this.request(`users/${username}`);
  //     return res.user;
  //   }

  //   static async saveProfile(username, data) {
  //     await this.request(`users/${username}`, data, "patch");
  //   }
}

export default BooklyApi;
