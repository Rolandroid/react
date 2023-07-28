import axios from "axios";

const baseUrl = import.meta.env.VITE_USER_API_URL;
console.log(`${baseUrl} Prueba 1`)

export const userRegister = async (body) => {
  try {
    const url = baseUrl + "/api/register";
    const { data } = await axios.post(url, body);
    console.log(url + " user.Services 10")
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al registrar al usuario.");
}
    
    
};

export const userLogin = async (body) => {
    try {
      const url = `${baseUrl}/api/login`;
      const { data } = await axios.post(url, body);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Hubo un error al loguear al usuario.");
    }
  };