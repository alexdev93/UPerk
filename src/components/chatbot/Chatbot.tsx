"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message. This is a demo response from the Universal Perk Chatbot.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Icon */}
      <button
        onClick={toggleChat}
        className="bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-700 transition-all"
      >
        <Image
          src="/images/ai/chatbot.svg"
          width={62}
          height={62}
          alt="chatbot"
        />
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className=" absolute bottom-24 right-0 w-80 sm:w-96 h-[500px] bg-gray-900 rounded-lg shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gray-800 p-4 text-white font-medium flex items-center">
            <Image
              src="/images/ai/chatbot.svg"
              width={32}
              height={32}
              alt="chatbot"
              className="mr-2"
            />
            <span>Universal Perk Chatbot</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 px-4 py-6 overflow-y-auto bg-gray-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 max-w-[80%] ${
                  message.sender === "user"
                    ? "ml-auto bg-blue-600 text-white"
                    : "mr-auto bg-gray-700 text-gray-100"
                } rounded-lg p-3`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-gray-800 flex items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ask anything here"
              className="flex-1 bg-gray-700 text-white rounded-l-lg px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-2"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
