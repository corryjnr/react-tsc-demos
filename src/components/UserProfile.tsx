import { useState } from "react";
type UserInfo = {
  username: string;
  email: string;
  age: number;
};

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    email: "",
    age: 0,
  });
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState("");
  const [ageInput, setAgeInput] = useState(0);

  const handleClick = (): void => {
    setUserInfo({
      username: usernameInput,
      email: emailInput,
      age: ageInput > 0 ? ageInput : 0,
    });
    setUsernameInput("");
    setEmailInput("");
    setAgeInput(0);
  };

  return (
    <div>
      <h2>UserProfile</h2>
      <h3>Username: {userInfo.username}</h3>
      <h3>Email: {userInfo.email}</h3>
      <h3>Age: {userInfo.age}</h3>
      Username:{" "}
      <input
        type="text"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
        placeholder="username"
      />
      <br />
      Email:{" "}
      <input
        type="text"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        placeholder="email"
      />
      <br />
      Age:{" "}
      <input
        type="number"
        value={ageInput}
        onChange={(e) => setAgeInput(parseInt(e.target.value))}
        placeholder="age"
      />
      <br />
      <button onClick={handleClick}>Update profile</button>
    </div>
  );
};
export default UserProfile;
