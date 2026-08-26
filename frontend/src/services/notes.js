import axios from "axios";

const baseUrl = "/api/notes";

const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) =>
      response.data.concat({
        id: 10000,
        content: "This note is not saved on the server",
        important: true,
      }),
    );
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then((response) => response.data);
};

export default { getAll, create, update };
