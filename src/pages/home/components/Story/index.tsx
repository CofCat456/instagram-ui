import Item from './item';

// TODO: delete mock data
import db from '../../../../../db.json';

const Story: React.FC = () => {
  const storyList = db.stories;

  return (
    <div className="no-scrollbar box-border flex h-[110px] w-full items-center overflow-x-auto overflow-y-hidden shadow-md lg:my-8">
      {storyList?.map((story) => {
        const { id, name, avatar } = story;
        return <Item key={id} name={name} avatar={avatar} />;
      })}
    </div>
  );
};

export default Story;
