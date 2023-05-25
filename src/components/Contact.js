import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

export const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        serviceId,
        templateId,
        {
          user_name: userName,
          user_email: userEmail,
          message: message,
        },
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear form fields after successful submission
    setUserName("");
    setUserEmail("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center border border-red-400">
      <form onSubmit={sendEmail} className="flex flex-col justify-center items-center">
        <label>Name:</label>
        <input
        className="w-64"
          type="text"
          name="user_name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>Email:</label>
        <input
        className='w-64'
          type="email"
          name="user_email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <label>Message:</label>
        <textarea
          className="w-96"
          typename="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
