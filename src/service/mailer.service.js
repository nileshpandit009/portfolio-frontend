import axios from "axios";

export const sendEmail = (fullName, email, message) => {
  return axios.post(
    "https://java-mailer.herokuapp.com/api/email",
    {
      fullName: fullName,
      email: email,
      message: message,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};
