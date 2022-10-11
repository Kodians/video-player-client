import React from 'react';

function UserAccount() {
  return <div>UserAccount</div>;
}

export default UserAccount;

UserAccount.getUserLayout = (page) => {
  return <>{page}</>;
};
