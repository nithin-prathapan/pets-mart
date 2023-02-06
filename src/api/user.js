import axios from "axios";

const url = "http://localhost/4000/auth/register";

export const createUser = async (newUser) => {
  await axios.post(url, newUser).then((result) => {
    console.log(result);
  });
};
