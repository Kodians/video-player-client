import React from 'react';
import { UserAccountSideBar } from '../../components/userAccountSidebar/UserAccountSideBar';
import { Store } from '../../utils/store';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

function UserAccount() {
  const { state }: any = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      return () => {
        router.push('/account/signin');
      };
    }
  }, [router, userInfo]);

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
