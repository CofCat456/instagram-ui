import Loading from './Loading';

import { useUpdateFollowMutation } from '../services/homeServices';

import { Friend } from '../interface';

interface Props {
  size?: 'medium' | 'small';
  showFollow?: boolean;
  isFollowing?: boolean;
  account?: string;
  location?: string;
  avatar?: string;
  id?: number;
}

const FollowElement: React.FC<Friend> = ({
  id = 1,
  isFollowing = false,
  account = '',
  location = '',
  avatar = '',
}) => {
  const [updateFollow, { isLoading }] = useUpdateFollowMutation();

  const followClickHandler = async (id: number, isFollowing: boolean) => {
    const friend = {
      id,
      location,
      account,
      avatar,
      isFollowing: !isFollowing,
    };

    try {
      await updateFollow({ id, friend }).unwrap();
    } catch (err) {
      console.error('Failed to update the follow: ', err);
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="ml-auto">
          <Loading size />
        </div>
      ) : (
        <p
          className={`${
            isFollowing ? 'text-gray-700' : 'text-blue-400'
          } ml-auto cursor-pointer text-xs font-bold`}
          onClick={() => followClickHandler(id, isFollowing)}
        >
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </p>
      )}
    </>
  );
};

const User: React.FC<Props> = ({
  id = 1,
  size = 'small',
  showFollow = false,
  isFollowing = false,
  account = '',
  location = '',
  avatar = '',
}) => {
  return (
    <div className="box-border flex h-[70px] items-center px-4">
      <div
        className={`${
          size === 'small' ? 'h-10 w-10' : 'h-[60px] w-[60px]'
        } overflow-hidden rounded-full`}
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="ml-4">
        <p className="text-sm font-bold">{account}</p>
        <p className="text-xs text-gray-400">{location}</p>
      </div>
      {showFollow && (
        <FollowElement
          id={id}
          account={account}
          location={location}
          avatar={avatar}
          isFollowing={isFollowing}
        />
      )}
    </div>
  );
};

export default User;
