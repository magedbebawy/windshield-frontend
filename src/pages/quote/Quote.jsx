import React, { useState } from "react";
import Header from "../../components/header/Header";
import './Quote.css';

function Quote(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [fix, setFix] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
      phone,
      year, 
      make,
      model,
      fix
    }
    sendEmail(data, (response) => {
      console.log(response.status);
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
      <Header title='Get your quote' page='quote' height='50vh'/>
      <form className="quote" onSubmit={handleSubmit}>
        <h1>Your information</h1>
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
      <h1>Car information</h1>
      <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      <br />
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
      <br />
      <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      <br />
      <input
        type='text'
        placeholder="What needs to be fixed?"
        value={fix}
        onChange={(e) => setFix(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Comments"
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
  const res = await fetch('http://localhost:3001/quote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });  
  callback(res);
};

export default Quote;
