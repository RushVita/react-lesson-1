const Profile = ({
  userData: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div>
      <p>
        <img src={avatar} alt="" width={200} />
      </p>
      <p>name{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
      <p>Followers {followers}</p>
      <p>Views {views}</p>
      <p>Likes {likes}</p>

      <p></p>
    </div>
  );
};

export default Profile;
