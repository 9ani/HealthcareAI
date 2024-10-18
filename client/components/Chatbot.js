import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { MessageCircle } from "lucide-react";

const Chatbot = ({ userId }) => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleShow = () => setShowChat(true);
  const handleClose = () => setShowChat(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input, userId }),
        }
      );

      const data = await response.json();
      setTimeout(() => {
        setIsTyping(false);
        const botMessage = { text: data.reply, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    } catch (error) {
      setIsTyping(false);
      const botMessage = {
        text: "Sorry, I couldn't contact the server. Please try again later.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  return (
    <>
      {!showChat && (
        <div
          className="fixed bottom-5 right-5 flex items-center bg-[#28511D] text-white px-4 py-2 rounded-full cursor-pointer hover:bg-[#1e3b14] transition-all duration-300 shadow-lg z-50"
          style={{ zIndex: 1000 }}
          onClick={handleShow}
        >
          <MessageCircle className="mr-2" />
          <span className="text-sm">Нажмите чтобы я мог помочь вам</span>
        </div>
      )}

      <div
        className={`fixed bottom-5 right-5 w-80 transition-all duration-300 ease-in-out transform z-50 ${
          // Kept same z-index
          showChat ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ zIndex: 1001 }}
      >
        {showChat && (
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-[#28511D] text-white p-4 flex justify-between items-center ">
              <h3 className="text-lg font-semibold">Healthcare AI Ассистент</h3>
              <button
                onClick={handleClose}
                style={{
                  fontSize: "1.5rem",
                  color: "#fff",
                  backgroundColor: "transparent",
                  border: "none", 
                  cursor: "pointer", 
                  transition: "color 0.3s", 
                  marginBottom: "13px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFD700")} 
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")} 
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="h-96 overflow-y-auto p-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block px-3 py-2 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-[#28511D] text-white"
                        : "bg-[#CEE422] text-black"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="text-left">
                  <span className="inline-block px-3 py-2 rounded-lg bg-gray-200">
                    <span className="typing-animation">...</span>
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t">
              <Form onSubmit={handleSend} className="flex">
                <Form.Control
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Спросите о питании и диете..."
                  className="flex-grow mr-2"
                />
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#28511D",
                    borderColor: "#28511D",
                    color: "white",
                  }}
                  className="hover:bg-[#1e3b14]"
                >
                  Send
                </Button>
              </Form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
