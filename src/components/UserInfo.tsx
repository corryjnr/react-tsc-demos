import { type Info } from "../types";

const UserInfo = ({ id, name, age, email }: Info) => {
  return (
    <div>
      <h3>Id: {id}</h3>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default UserInfo;
