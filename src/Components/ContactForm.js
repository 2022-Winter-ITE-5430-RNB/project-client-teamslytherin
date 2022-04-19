import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
import { toast } from "react-toastify";
import "../assets/css/contact.css";

import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
toast.configure();
init("Mf5M0Lt8CZkqgB4Rw");

// const getUsers = async () => {
//   const response = await axios.get("http://localhost:5000/api/feedbacks/");
//   setUsers(response.data);
//   console.log(response.data);
//   console.log("--test");
// };

// useEffect(() => {
//   getUsers();
// }, []);

export default function ContactUs() {
  const url = "https://ado-pet-server.herokuapp.com/api/contact";
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  // function submit(e) {}
  const sendEmail = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      })
      .then((res) => {
        console.log(res.data);
      });
    emailjs
      .sendForm(
        "service_2v1rlvo",
        "template_z0j54tg",
        e.target,
        "Mf5M0Lt8CZkqgB4Rw"
      )
      .then(
        (result) => {
          //   console.log(result.text);
          toast.success("Message sent Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          //   console.log(error.text);
          toast.error("Message not sent ,Something wrong", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      );
  };

  return (
    <div className="contact-outer">
      <h1>CONTACT US</h1>
      <div className="container contact">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="input"
                onChange={(e) => handle(e)}
                placeholder="Name"
                id="name"
                name="name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="email"
                className="input"
                placeholder="Email Address"
                onChange={(e) => handle(e)}
                id="email"
                name="email"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <input
                type="text"
                className="input"
                placeholder="Subject"
                onChange={(e) => handle(e)}
                id="subject"
                name="subject"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto msg">
              <textarea
                className="holder"
                cols="30"
                rows="8"
                placeholder="Your message"
                onChange={(e) => handle(e)}
                name="message"
                id="message"
              ></textarea>
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="submit btn btn-info"
                // className="btn btn-info"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
