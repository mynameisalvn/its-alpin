import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_gncq3aw",
        "template_8htvobw",
        {
          from_name: formData.name,
          to_name: "Alpin",
          from_email: formData.email,
          to_email: "alpindevs@gmail.com",
          message: formData.message,
        },
        "SCzv-7FncDpSafIo6"
      );
      setIsLoading(false);
      SetFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been delivered!");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showAlertMessage("danger", "Oops, something went wrong!");
    }
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center c-space section-spacing"
      id="contact"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Header*/}
      <div className="mb-12 text-center">
        <h2 className="text-5xl font-extrabold text-dark">Contact.</h2>
        <p className="mt-4 text-neutral-500">
          Feel free to reach out — whether it’s a project idea or just to say
          hi.
        </p>
        <p className="mt-1 text-md from-gray-500 to-white">
          I’ll get back to you as soon as I can.
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-md p-6 border border-white/10 rounded-2xl bg-primary z-10">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="example@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="field-input field-input-focus h-32 resize-none"
              placeholder="Type something here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
