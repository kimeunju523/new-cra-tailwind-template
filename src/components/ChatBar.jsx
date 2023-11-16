const ChatBar = () => {
  return (
    <div className="bg-purple-100 h-24">
      <form className="bg-red-100 h-full flex items-center">
        <input className="bg-green-100" type="text" />
        <input className="bg-blue-100" type="submit" />
      </form>
    </div>
  );
};

export default ChatBar;
