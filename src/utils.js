import axios from 'axios'


const url = "http://localhost:8000";

export const getNemzetek = async () => { 
    try {
      const response = await axios.get(url + "/api/nemzetek");
      console.log("Response from server:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
  };