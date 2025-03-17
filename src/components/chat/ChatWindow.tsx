import React, { useState } from "react";

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "George Bekor",
      text: "Привет! Сделал баннер, как просили: минимализм, современный стиль, акцент на продукте. Отправляю на согласование.",
      time: "2 hours ago",
    },
    {
      id: 2,
      sender: "You",
      text: "Привет! Спасибо, но можно сделать чуть повеселее?",
      time: "2 hours ago",
    },
    {
      id: 3,
      sender: "George Bekor",
      text: "Окей, добавил яркие цвета, динамику, немного графики.",
      time: "2 hours ago",
    },
    {
      id: 4,
      sender: "You",
      text: "Отлично! Но теперь как-то слишком весело... Можно чуть поскромнее?",
      time: "2 hours ago",
    },
    {
      id: 5,
      sender: "George Bekor",
      text: "Вернул к минимализму.",
      time: "2 hours ago",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "You",
          text: newMessage,
          time: "Just now",
        },
      ]);
      setNewMessage("");
    }
  };

  if (!user) {
    return (
      <div className="w-3/4 p-4 flex items-center justify-center">
        <p className="text-gray-500">
          Выберите пользователя для отображения чата
        </p>
      </div>
    );
  }

  return (
    <div className="w-3/4 p-4 flex flex-col bg-white rounded-2xl">
      <div className="flex items-center space-x-4 mb-4">
        <img src={user.avatar} alt="User" className="rounded-full" />
        <div>
          <p className="font-bold text-xl">{user.name}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4 flex-grow overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-4 ${
              message.sender === "You" ? "justify-end" : ""
            }`}
          >
            {message.sender !== "You" && (
              <img src={user.avatar} alt="User" className="rounded-full" />
            )}
            <div
              className={`p-4 rounded-lg ${
                message.sender === "You"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              <p className="font-bold">{message.sender}</p>
              <p className="text-sm">{message.text}</p>
              <p className="text-xs text-gray-500">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full p-2 border rounded"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
