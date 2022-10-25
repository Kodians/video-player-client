import React from "react";
import { UserAccountSideBar } from "../../components/userAccountSidebar/UserAccountSideBar";

function UserAccount() {
  return (
    <div>
      <UserAccountSideBar />
    </div>
  );
}

export default UserAccount;

UserAccount.getUserLayout = (page) => {
  return <>{page}</>;
};
