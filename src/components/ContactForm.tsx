import { FormEvent, useState } from "react";

interface ContactInfo {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const [contactInfos, setContactInfos] = useState<ContactInfo[]>([
    {
      name: "",
      email: "",
      message: "",
    },
  ]);
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [messageInput, setMessageInput] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactInfos([
      ...contactInfos,
      { name: nameInput, email: emailInput, message: messageInput },
    ]);
    setNameInput("");
    setEmailInput("");
    setMessageInput("");
  };

  return (
    <div>
      <h3>Contact Form</h3>
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          placeholder="Enter your name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <br />
        Email:{" "}
        <input
          type="email"
          placeholder="Enter your email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <br />
        Message:
        <textarea
          placeholder="Enter message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <section>
        <h3>Contact forms submited</h3>
        {contactInfos.map((info, index) => {
          if (info.name != "") {
            return (
              <ul key={index}>
                <p>Name: {info.name}</p>
                <p>Email: {info.email}</p>
                <p>Message: {info.message}</p>
                <br />
              </ul>
            );
            return;
          }
        })}
      </section>
    </div>
  );
};
export default ContactForm;
