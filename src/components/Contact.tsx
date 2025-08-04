import React,{useState} from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import HomeArrow from "@/components/HomeArrow";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast.loading("Sending message...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        toast.dismiss();
        toast.success("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.dismiss();
        toast.error("❌ Failed to send message. Try again.");
      });
  };
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#f6f6f6] via-white to-[#eaeaea] overflow-hidden">
      <HomeArrow />
      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />

      <div className="relative z-10 px-6 py-20 md:px-20 max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-neutral-900 mb-12"
        >
          Get In Touch
        </motion.h1>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black/20"
              />
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black/20"
            ></textarea>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex justify-center gap-4"
        >
          <Link
            href="https://github.com/ANANDSINGH212301"
            target="_blank"
            className="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-all"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anand-singh-03a3862a3"
            target="_blank"
            className="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="mailto:anandsingh264583@gmail.com"
            className="w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center hover:bg-neutral-800 hover:text-white transition-all"
            aria-label="Email"
          >
            <FaEnvelope />
          </Link>
        </motion.div>
        <Toaster position="top-right" />
      </div>
    </main>
  );
};

export default Contact;
