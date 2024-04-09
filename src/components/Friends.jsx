import FriendLIst from "./FriendLIst";

const Friends = ({ initialFriends }) => {
  return (
    <ul>
      {initialFriends.map((item) => (
        <li key={item.id}>
          <FriendLIst friend={item} />
        </li>
      ))}
    </ul>
  );
};

export default Friends;
