import Loading from '../../../../components/Loading';
import User from '../../../../components/User';

import { useGetFriendsQuery } from '../../../../services/homeServices';

const Profile: React.FC = () => {
  const { data, isLoading } = useGetFriendsQuery('all');

  const followingFriends = data?.filter((friend) => friend.isFollowing);

  return (
    <div className="mt-8 ml-8 box-border p-2 shadow-lg">
      <User account="cofcat_0324" location="CofCat" avatar="/images/avatar.png" size="medium" />
      <p className="mx-4 mt-4 mb-3 text-sm font-bold text-gray-400">You are following</p>
      {isLoading ? (
        <div className="flex w-full justify-center py-5">
          <Loading />
        </div>
      ) : (
        followingFriends?.map((friend) => {
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
  );
};

export default Profile;
