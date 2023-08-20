import React from "react";
import axios from "axios";
import "./styles.css";
import { useState } from "react";

export default function Contact() {
  const [form,setform] = useState({
    title:"",
    email:"",
    msg:"",
  })

  const [msg,setmsg] = useState(false);

  const handlechange = (event)=>{
    console.log(event);
    setform( {...form,[event.target.name] : event.target.value });
  }

  const handlesubmit = async (event) =>{
    event.preventDefault();

    setmsg(true);

    setTimeout(()=>
    {
      setmsg(false)
    },2000);

    console.log(form);

    axios.post("/api/form", {form})
    .then((response)=>{
      console.log(response)
    })
    .catch(err => (console.log("error")))
  }

  return (
    <div className="contact" id="Contact" >
      <div className="contact-heading">
        <h2>Contact Me</h2>
        <p>Submit the form below to get in touch with me:- </p>
      </div>

      <form className="contact-form" onSubmit={handlesubmit} method="POST">
        <input type="text" name="title" value={form.title} onChange={handlechange}  placeholder="Enter your name"/>
        <input type="email" name="email" value={form.email} onChange={handlechange}  placeholder="Enter your e-mail"/>
        <textarea placeholder="Enter Text" value={form.msg} onChange={handlechange}  name="msg" id="" cols="30" rows="10"></textarea>
        <button type="submit"  >Let's Talk</button>
      </form>
      {msg && (<p id="demo">form submitted</p>)}
    </div>
  );
}

