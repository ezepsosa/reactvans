import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { getSessions } from "../../components/api";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading/styles";

export function HostLayout() {
  const [session, setSession] = useState<number | null>(null);
  const location = useLocation();
  const autheticated = localStorage.getItem("usertokenlogged") || "";

  useEffect(() => {
    async function loadSessions() {
      try {
        if (autheticated != "") {
          const sessionFetched = await getSessions(autheticated);
          setSession(sessionFetched);
        } else {
          setSession(0);
        }
      } catch (err) {
        console.log(err);
      }
    }
    loadSessions();
  }, [autheticated, session]);

  if (session === null) {
    return <Loading></Loading>;
  }

  if (session !== 1) {
    return (
      <Navigate
        to={"/login"}
        state={{ message: "You must log in first", location: location }}
        replace
      />
    );
  }

  return (
    <div>
      <Navbar buttons={["Dashboard", "Income", "Vans", "Reviews"]} />
      <Outlet />
    </div>
  );
}
