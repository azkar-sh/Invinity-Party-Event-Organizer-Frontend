import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getDataUser } from "../../stores/actions/user";

export default function DetailUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getDataUser());
  }, []);

  console.log(user.userData);
  return (
    <div>
      <h1>Detail User</h1>
    </div>
  );
}
