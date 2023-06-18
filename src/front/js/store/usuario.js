export const userStore = {
  userList: [],
  user: {
    msg: "I'm an object",
  },
  currentUser: "",
};

export const userActions = (getStore, getActions, setStore) => {
  return {
    sendEmail: async (fullname, email, phone, subject, message) => {
      const url = "http://127.0.0.1:3001/api/send-email";
      const headers = {
        "Content-Type": "application/json",
      };
      const body = JSON.stringify({
        fullname: fullname,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      });

      try {
        const response = await fetch(url, {
          method: "POST",
          headers,
          body,
        });

        if (!response.ok) {
          throw new Error("Failed to send email");
        }

        const data = await response.json();
        console.log(data);
        return data; // Return the data for handling in the calling function
      } catch (error) {
        console.error("Failed to send email:", error);
        throw error; // Rethrow the error for handling in the calling function
      }
    },
  };
};
