import PostList from './components/PostList';
import Profile from './components/Profile';
import Story from './components/Story';

const Home: React.FC = () => {
  return (
    <div className="flex lg:justify-center">
      <div className="w-full lg:w-[600px]">
        <Story />
        <PostList />
      </div>
      <div className="hidden lg:block lg:w-[424px]">
        <Profile />
      </div>
    </div>
  );
};

export default Home;
