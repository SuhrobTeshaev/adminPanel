import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex gap-2 ">
      <ChatSidebar onSelectUser={handleUserSelect} />
      <ChatWindow user={selectedUser} />
    </div>
  );
};

export default ChatPage;
