import Auth from "./Auth";
import user from "./user";
const Authorized = Auth(user);
function App() {
  const user = { name: "John" };
    const isAuth = true;
  }

  return (
    <div>
      <Authorized isAuth={isAuth} user={user} />
    </div>
  );  


  