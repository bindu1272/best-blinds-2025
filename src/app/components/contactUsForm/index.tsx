"use client";
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import windowCoveringsData from "../windowCoveringsData";
import { useRouter } from "next/navigation";
export const metadata: Metadata = {
  title: "Contact Us : Blinds Warehouse Sydney",
  description:
    "Stylish & Durable Blinds Tailored Just for You by Blinds Warehouse Experts!",
};
export default function ContactUsForm() {
  const router = useRouter();
  const [checkedItems, setCheckedItems] = useState<any>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading,setLoading] = useState(false);
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleCheckboxChange = (index: any) => {
    setCheckedItems((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      [index]: !prevCheckedItems[index],
    }));
  };
  const handleTextareaChange = (event: any) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    setCheckedItems((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      blinds: true,
    }));
  }, []);
  console.log("checkedItems", checkedItems);
  const showToast = (message: any, isError = false) => {
    const toast: any = document.getElementById("toast");
    toast.textContent = message;

    if (isError) {
      toast.style.backgroundColor = "red";
    } else {
      toast.style.backgroundColor = "green";
    }

    toast.style.display = "block";
    setTimeout(() => {
      toast.style.display = "none";
    }, 2000); // Hide the toast after 2 seconds (you can adjust the duration)
  };
  const submitContactForm = () => {
    setLoading(true);
    const filteredKeys = Object.keys(checkedItems).filter(
      (key) => checkedItems[key] === true
    );
    const commaSeparatedKeys = filteredKeys.join(", ");
    const data = {
      name: name,
      phone: phone,
      email: email,
      message: message,
      subject: "A New message from Blinds Warehouse Sydney website",
      windowCoveringType: commaSeparatedKeys,
    };
    if (name !== "" && phone !== "" && email !== "" && message !== "") {
      fetch("/api/contactus", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        if (!res.ok) {
          setLoading(false);
          throw new Error("Failed to send message");
        }
        else {
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
          for (const key in checkedItems) {
            if (checkedItems.hasOwnProperty(key)) {
              if (key == "blinds") {
                continue;
              }
              checkedItems[key] = false;
            }
          }
          showToast("Email sent successfully");
          setLoading(false);
        }
        return res.json();
      });
    } else {
      showToast("Please fill in all the required fields.", true);
      setLoading(false);
    }
    console.log("data", data, email);
  };
  return (
    <div className="booking_form">
      <div id="toast" className="toast">
        Your Email has been sent successfully.
      </div>
      <h1>Book a free Consultation</h1>
      <div className="checkbox_group">
        {windowCoveringsData?.map((item, index) => {
          return (
            <label className="checkbox_label" key={index}>
              {item?.name}
              {index == 0 ? (
                <input
                  type="checkbox"
                  checked={checkedItems[item?.key]}
                  onClick={() => handleCheckboxChange(item?.key)}
                />
              ) : (
                <input
                  type="checkbox"
                  checked={checkedItems[item?.key]}
                  onClick={() => handleCheckboxChange(item?.key)}
                />
              )}
              <span className="checkmark"></span>
            </label>
          );
        })}
      </div>
      <div className="form_group">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Your phone"
          value={phone}
          onChange={handlePhoneChange}
        />
        <input
          type="text"
          placeholder="Your email"
          value={email}
          onChange={handleEmailChange}
        />
        <textarea
          placeholder="How can we help you?"
          value={message}
          onChange={handleTextareaChange}
        ></textarea>
      </div>
      {loading ? (
          <button className="send_btn" disabled>
            Loading...
          </button>
        ) : (
          <button className="send_btn" onClick={submitContactForm}>
            Send a Message
          </button>
        )}
    </div>
  );
}
