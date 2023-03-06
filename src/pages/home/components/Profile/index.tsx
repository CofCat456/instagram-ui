import User from '../../../../components/User';

const Profile: React.FC = () => {
  const friends = [
    {
      id: 1,
      location: 'Singapore',
      account: 'max_999',
      isFollowing: true,
      avatar: '/images/avatars/a1.jpg',
    },
    {
      id: 2,
      location: 'Singapore',
      account: 'fm_999',
      isFollowing: true,
      avatar: '/images/avatars/a2.jpg',
    },
    {
      id: 3,
      location: 'Singapore',
      account: 'joanne_999',
      isFollowing: true,
      avatar: '/images/avatars/a3.jpg',
    },
    {
      id: 4,
      location: 'Singapore',
      account: 'focus_999',
      isFollowing: true,
      avatar: '/images/avatars/a4.jpg',
    },
  ];

  return (
    <div className="mt-8 ml-8 box-border p-2 shadow-lg">
      <User account="cofcat_0324" location="CofCat" avatar="/images/avatar.png" size="medium" />
      <p className="mx-4 mt-4 mb-3 text-sm font-bold text-gray-400">You are following</p>
      {friends.map((friend) => {
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
      })}
    </div>
  );
};

export default Profile;
