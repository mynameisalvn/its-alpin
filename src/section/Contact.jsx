import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { motion } from "framer-motion";
import { Particles } from "../components/Particles";
import { mySocials } from "../constants";

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

      {/* Header */}
      <div className="mb-26 text-center">
        <h2 className="text-5xl font-extrabold text-dark underline underline-offset-8 decoration-2 decoration-gradient-to-r">
          Contact.
        </h2>
      </div>

      {/* Form + Direct Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Social Links + Email button */}
        <div className="flex flex-col items-center justify-center z-10 my-10">
          <h3 className="text-2xl font-semibold mb-4">Get in touch.</h3>
          <p className="mb-7 text-neutral-500 text-center">
            Feel free to reach out — whether it’s a project idea or just to say
            hi.
          </p>
          <motion.div className="w-full flex items-center justify-center gap-3 px-4 py-3 cursor-pointer transition duration-300">
            <motion.a
              href="mailto:alpindevs@gmail.com?subject=Contact from Portfolio&body=Hello Alpin,"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 7.5l-9.75 7.5L2.25 7.5m19.5 0A2.25 2.25 0 0021.75 6h-19.5A2.25 2.25 0 000 7.5v9a2.25 2.25 0 002.25 2.25h19.5A2.25 2.25 0 0024 16.5v-9z"
                />
              </motion.svg>
            </motion.a>
            {/* Slice array get 0 and 2 ignore 1 */}
            {[...mySocials.slice(0, 1), ...mySocials.slice(2)].map(
              (social, index) => (
                <motion.a
                  href={social.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <motion.img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  />
                </motion.a>
              )
            )}
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="p-6 border border-white/10 rounded-2xl bg-primary z-10 mb-13">
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
              className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-gray-900 hover-animation"
            >
              {!isLoading ? "Send Message" : "Sending..."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
