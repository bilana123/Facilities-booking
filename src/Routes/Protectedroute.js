import React, { useEffect } from "react";

import { useNavigate, Outlet } from "react-router-dom";

export default function Protectedroute({ user }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    navigate("/login");
    return null;
  } else {
    return <Outlet />;
  }
}