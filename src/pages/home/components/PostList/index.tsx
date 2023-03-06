import User from '../../../../components/User';
import Comment from './Comment';

interface Props {
  account: string;
  location: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
}

const Post: React.FC<Props> = ({
  account,
  location,
  avatar,
  photo,
  likes,
  description,
  hashTags,
  createTime,
}) => {
  return (
    <div className="pb-4 shadow-md lg:mb-8">
      <User account={account} location={location} avatar={avatar} />
      <img src={photo} />
      <Comment
        account={account}
        likes={likes}
        description={description}
        hashTags={hashTags}
        createTime={createTime}
      />
    </div>
  );
};

// TODO: delete mock data
import db from '../../../../../db.json';

const PostList: React.FC = () => {
  const postList = db.posts;

  return (
    <>
      {postList?.map((post) => {
        const { id, location, account, avatar, photo, likes, description, hashTags, createTime } =
          post;
        return (
          <Post
            location={location}
            account={account}
            avatar={avatar}
            photo={photo}
            likes={likes}
            description={description}
            hashTags={hashTags}
            createTime={createTime}
            key={id}
          />
        );
      })}
    </>
  );
};

export default PostList;
