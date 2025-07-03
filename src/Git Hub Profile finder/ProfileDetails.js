import './ProfileDetails.css';

const ProfileDetails = ({ userDetails }) => {
  const { avatar_url, followers, following, html_url, created_at, id, location, name } = userDetails;

  return (
    <>
      <div className="profile-container">
        <img src={avatar_url} alt="Profile" />
        <h1>Profile Details:</h1>
        <h3>Name: {name}</h3>
        <h3>ID: {id}</h3>
        <h3>Profile: <a href={html_url} target="_blank" rel="noreferrer">Link</a></h3>
        <h3>Created At: {created_at}</h3>
        <h3>Location: {location}</h3>
        <h3>Followers: {followers}</h3>
        <h3>Following: {following}</h3>
      </div>
    </>
  );
};

export default ProfileDetails;
