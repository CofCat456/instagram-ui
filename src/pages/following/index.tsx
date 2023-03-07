import Loading from '../../components/Loading';
import User from '../../components/User';

import { useGetFriendsQuery } from '../../services/homeServices';

const Following: React.FC = () => {
  const { data, isLoading } = useGetFriendsQuery('all');

  return (
    <>
      <p className="my-8 box-border px-4 text-2xl font-bold">Following</p>
      <div className="mx-2 mt-8 box-border shadow-md">
        {isLoading ? (
          <div className="flex w-full justify-center py-5">
            <Loading />
          </div>
        ) : (
          data?.map((friend) => {
            const { id, account, avatar, isFollowing, location } = friend;

            return (
              <div className="-mt-3" key={id}>
                <User
                  id={id}
                  account={account}
                  avatar={avatar}
                  location={location}
                  isFollowing={isFollowing}
                  showFollow
                />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Following;
