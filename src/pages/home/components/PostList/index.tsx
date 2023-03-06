import Loading from '../../../../components/Loading';
import User from '../../../../components/User';
import Comment from './Comment';

import { useGetPostsQuery } from '../../../../services/homeServices';

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

const PostList: React.FC = () => {
  const { data, isLoading } = useGetPostsQuery('all');

  return (
    <>
      {isLoading ? (
        <div className="mt-20 flex w-full justify-center">
          <Loading />
        </div>
      ) : (
        data?.map((post) => {
          const { id, location, account, avatar, photo, likes, description, hashTags, createTime } =
            post;
          return (
            <Post
              key={id}
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
            />
          );
        })
      )}
    </>
  );
};

export default PostList;
