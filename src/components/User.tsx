type UserInfo = {
  name: string;
  age: number;
  isStudent: boolean;
};

const User = ({ name, age, isStudent }: UserInfo) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{isStudent}</h2>
    </div>
  );
};

export default User;
