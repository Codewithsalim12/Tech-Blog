"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com"; // Import EmailJS
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import { FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    const serviceId = "service_2obso4f"; // Replace with your EmailJS Service ID
    const templateId = "template_1oeh7u6"; // Replace with your EmailJS Template ID
    const userId = "iOibMqK03nJ5Bwkzi"; // Replace with your EmailJS User ID

    // Show the "Hold on..." toast when the user clicks submit
    toast.info("Hold on...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
    });

    // Prepare the data to send to the email template
    const formData = {
      email: data.email,
      // Add other fields like name, message if needed
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, formData, userId).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        toast.success("Your query has been sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          pauseOnHover: true,
        });
      },
      (error) => {
        console.error("Error sending email:", error.text);
        toast.error("Failed to send your query. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
          pauseOnHover: true,
        });
      }
    );
  };

  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-white focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}

        <input
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.instagram}
          rel="noopener noreferrer"
          className="inline-block mr-4"
          aria-label="Reach out to me via Instagram"
          target="_blank"
        >
          <FaInstagram
            className="hover:scale-125 transition-all ease duration-200 cursor-pointer"
            size={28} // Adjust size (e.g., 32px)
          />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 Codewithsalim. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a
            href="https://github.com/Codewithsalim12"
            className="underline"
            target="_blank"
          >
            Codewithsalim
          </a>
        </div>
      </div>

      {/* Toastify container */}
      <ToastContainer />
    </footer>
  );
};

export default Footer;
