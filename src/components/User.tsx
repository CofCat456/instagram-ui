interface Props {
  size?: 'medium' | 'small';
  showFollow?: boolean;
  isFollowing?: boolean;
  account?: string;
  location?: string;
  avatar?: string;
  id?: number;
}

const User: React.FC<Props> = ({
  size = 'small',
  showFollow = false,
  isFollowing = false,
  account,
  location,
  avatar,
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
        <p
          className={`${
            isFollowing ? 'text-gray-700' : 'text-blue-400'
          } ml-auto cursor-pointer text-xs font-bold`}
        >
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </p>
      )}
    </div>
  );
};

export default User;
