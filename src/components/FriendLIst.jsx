const FriendLIst = ({ friend }) => {
  return (
    <div>
      <img src={friend.avatar} alt="" width={200} />
      <p>name {friend.name}</p>
      <p>{friend.isOnline ? "Online💚" : "Ofline❌"}</p>
      <p>id {friend.id}</p>
    </div>
  );
};

export default FriendLIst;
