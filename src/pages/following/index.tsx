import User from '../../components/User';

const Following: React.FC = () => {
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
    <>
      <p className="my-8 box-border px-4 text-2xl font-bold">Following</p>
      <div className="mx-2 mt-8 box-border shadow-md">
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
    </>
  );
};

export default Following;
