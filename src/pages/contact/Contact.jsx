import React, { useState } from "react";
import Header from "../../components/header/Header";
import './Contact.css';

function Contact(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
      phone
    }

    sendEmail(data, (response) => {
      console.log('res', response.status);
      response.status !== 200 ? setShowError(true) : setShowSuccess(true);
      console.log(showError, showSuccess);
    });

    setTimeout(() => {
      setShowError(false);
      setShowSuccess(false);
    }, 10000);

  };

  return (
    <div>
        <Header title='Contact Us' height='50vh'/>
        <form className="contact" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      <br />
      <input
          type="phone"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      <br />
        <textarea
        placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      <br />
      <button type="submit">Submit</button>
    </form>
    { 
      showError && <div className="Error">Error submiting your request. Please try again.</div> ||
      showSuccess && <div className="success">Request sent successfully. A technician will contact you shortly.</div>
    }
    </div>
  );
};

async function sendEmail(formData, callback) {
  const response = await fetch('https://windshield-backend.herokuapp.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  callback(response);
};

export default Contact;
