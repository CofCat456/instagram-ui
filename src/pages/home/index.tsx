import User from '../../components/User';
import PostList from './components/PostList';
import Story from './components/Story';

const Home: React.FC = () => {
  return (
    <div className="flex lg:justify-center">
      <div className="w-full lg:w-[600px]">
        <Story />
        <PostList />
      </div>
      <div className="hidden lg:block lg:w-[424px]">
        {/* <User avatar="/images/avatars/a1.png" account="user1" location="Taipei" showFollow={true} /> */}
      </div>
    </div>
  );
};

export default Home;
