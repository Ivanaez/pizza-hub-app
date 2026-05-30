import styles from "./UserGreeting.module.css";
import { useUser } from "@/features/user/UserContext";

export function UserGreeting() {
  // get user data
  const { user, logout } = useUser();

  // no user → hide
  if (!user) return null;

  return (
    <p className={styles.userGreeting}>
      Hello, {user.name} /{" "}
      
      <span
        className={styles.logoutText}
        onClick={logout}
      >
        Logout
      </span>
    </p>
  );
}