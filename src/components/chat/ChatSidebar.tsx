import React from "react";

const ChatSidebar = ({ onSelectUser }) => {
  const users = [
    {
      id: 1,
      name: "George Bekor",
      role: "Designer",
      lastMessageTime: "15 mins",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      name: "Anna Smith",
      role: "Manager",
      lastMessageTime: "20 mins",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      name: "John Doe",
      role: "Developer",
      lastMessageTime: "30 mins",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      name: "Jane Roe",
      role: "Tester",
      lastMessageTime: "45 mins",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 5,
      name: "Chris Lee",
      role: "Support",
      lastMessageTime: "1 hour",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 6,
      name: "Pat Kim",
      role: "Designer",
      lastMessageTime: "1 hour",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 7,
      name: "Alex Brown",
      role: "Manager",
      lastMessageTime: "2 hours",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 8,
      name: "Sam Green",
      role: "Developer",
      lastMessageTime: "2 hours",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 9,
      name: "Taylor White",
      role: "Tester",
      lastMessageTime: "3 hours",
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 10,
      name: "Jordan Black",
      role: "Support",
      lastMessageTime: "3 hours",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  return (
    <div className="w-1/4 border-r bg-white rounded-2xl p-4">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <input
        type="text"
        placeholder="Поиск"
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-4 cursor-pointer p-2 hover:bg-gray-100 rounded"
            onClick={() => onSelectUser(user)}
          >
            <img src={user.avatar} alt="User" className="rounded-full" />
            <div>
              <p className="font-bold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
            </div>
            <p className="text-sm text-gray-500 ml-auto">
              {user.lastMessageTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
