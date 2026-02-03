"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import {
  SparklesIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init('user_def456'); // Replace with your actual public key
  }, []);

  interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

  const handleChange = (e: HandleChangeEvent) => {
    const { name, value } = e.target;
    const fieldName = name === 'from_name' ? 'name' : name === 'from_email' ? 'email' : name;
    setFormData({ ...formData, [fieldName]: value });
  };

  interface EmailJSConfig {
    serviceId: string;
    templateId: string;
    publicKey: string;
  }

  interface EmailJSResult {
    text: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    const config: EmailJSConfig = {
      serviceId: 'service_1xyo4tc',
      templateId: 'template_lnmp83w', // Replace with your actual template ID
      publicKey: 'fCxID7F0ht4oiMJGa', // Replace with your actual public key
    };

    if (
      config.serviceId === 'YOUR_SERVICE_ID' ||
      config.templateId === 'YOUR_TEMPLATE_ID' ||
      config.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      alert('EmailJS is not configured yet. Please check EMAILJS_SETUP.md for setup instructions.');
      setIsSubmitting(false);
      return;
    }

    try {
      const result: EmailJSResult = await emailjs.sendForm(
        config.serviceId,
        config.templateId,
        e.target as HTMLFormElement,
        config.publicKey
      );

      console.log('Email sent successfully:', result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please check your EmailJS configuration.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-2 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center px-20 w-full z-[20]"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[20px]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Get In Touch</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2"
        >
          Let&apos;s Connect
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 w-full max-w-[1200px]">
          {/* Contact Info */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="flex flex-col gap-8 lg:w-1/3"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7042f88b] bg-gradient-to-r from-[#0300145e] to-[#0300148a] backdrop-blur-sm">
                <EnvelopeIcon className="w-6 h-6 text-[#b49bff]" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <p className="text-white">thakurvivek77900@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7042f88b] bg-gradient-to-r from-[#0300145e] to-[#0300148a] backdrop-blur-sm">
                <PhoneIcon className="w-6 h-6 text-[#b49bff]" />
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <p className="text-white">+91 9356767848</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7042f88b] bg-gradient-to-r from-[#0300145e] to-[#0300148a] backdrop-blur-sm">
                <MapPinIcon className="w-6 h-6 text-[#b49bff]" />
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white">Jalgaon, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Follow Me</h4>
              <div className="flex gap-4">
                <Link
                  href="linkedin.com/in/vivek-thakur-53188730a"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"

                >
                  <Image src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="linkedin" className="text-white font-bold" width={30} height={30} />
                </Link>
                <Link
                  href="https://github.com/VivekThakur999"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Image src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="linkedin" className="text-white font-bold" width={30} height={30} />
                </Link>
                <Link
                  href="https://leetcode.com/u/vivekthakur999/"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Image src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000" alt="linkedin" className="text-white font-bold" width={30} height={30} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInFromRight(0.8)}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#7042f88b] bg-[#0300145e] text-white placeholder-gray-400 focus:outline-none focus:border-[#7042f8] transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#7042f88b] bg-[#0300145e] text-white placeholder-gray-400 focus:outline-none focus:border-[#7042f8] transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#7042f88b] bg-[#0300145e] text-white placeholder-gray-400 focus:outline-none focus:border-[#7042f8] transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-[#7042f88b] bg-[#0300145e] text-white placeholder-gray-400 focus:outline-none focus:border-[#7042f8] transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 button-primary text-white font-medium rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <PaperAirplaneIcon className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromTop}
          className="mt-6 mb-10 text-center"
        >
          <p className="text-gray-400">
            I&apos;m always open to discussing new opportunities and interesting projects.
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
            Let&apos;s build something amazing together!
          </p>
        </motion.div>
      </motion.div>
      {/* Footer */}
<footer className="w-full mt-10 border-t border-[#7042f88b] bg-[#030014]">
  <div className="max-w-[1200px] mx-auto px-6 py-6 text-center">
    <p className="text-sm text-gray-400">
      © Copyright 2026 | All Rights Reserved By{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
        Vivek Thakur
      </span>
    </p>
  </div>
</footer>

    </section>
  );
};

export default Contact;