import { AdminInfoList } from "../types";

const AdminInfo = ({
  id,
  name,
  age,
  email,
  role,
  lastLogin,
}: AdminInfoList) => {
  return (
    <div>
      <h3>ID: {id}</h3>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Email: {email}</h3>
      <h3>Role: {role}</h3>
      <h3>LastLogin: {lastLogin.toLocaleString()}</h3>
    </div>
  );
};
export default AdminInfo;
