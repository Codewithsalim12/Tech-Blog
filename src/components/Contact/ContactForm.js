"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Show the "Sending..." toast
    const sendingToast = toast.loading("Sending your message...");

    emailjs
      .send(
        "service_t8k4ea4", // Replace with your EmailJS service ID
        "template_1oeh7u6", // Replace with your EmailJS template ID
        {
          name: data.name,
          email: data.email,
          phone: data["phone number"],
          project_details: data["project details"],
          message: `
            Name: ${data.name}
            Email: ${data.email}
            Phone: ${data["phone number"]}
            Project Details: ${data["project details"]}
          `, // The full message to include all details
        },
        "iOibMqK03nJ5Bwkzi" // Replace with your EmailJS public key (user ID)
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);

          // Update toast to success
          toast.update(sendingToast, {
            render:
              "Your message has been sent successfully! I will respond shortly.",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
        },
        (error) => {
          console.error("Failed to send email:", error.text);

          // Update toast to error
          toast.update(sendingToast, {
            render: "Failed to send your message. Please try again.",
            type: "error",
            isLoading: false,
            autoClose: 5000,
          });
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", { required: true, maxLength: 80 })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      and I want to discuss a potential project. You can email me at
      <input
        type="email"
        placeholder="your@email"
        {...register("email", { required: true })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      or reach out to me on
      <input
        type="tel"
        placeholder="your phone"
        {...register("phone number", { required: true })}
        className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea
        {...register("project details", { required: true })}
        placeholder="My project is about..."
        rows={3}
        className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value="send request"
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
      />
    </form>
  );
}
