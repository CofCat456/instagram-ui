import Item from './item';
import Loading from '../../../../components/Loading';

import { useGetStoiesQuery } from '../../../../services/homeServices';

const Story: React.FC = () => {
  const { data, isLoading } = useGetStoiesQuery('all');

  return (
    <div className="no-scrollbar box-border flex h-[110px] w-full items-center overflow-x-auto overflow-y-hidden shadow-md lg:my-8">
      {isLoading ? (
        <div className="flex w-full justify-center">
          <Loading />
        </div>
      ) : (
        data?.map((story) => {
          const { id, name, avatar } = story;
          return <Item key={id} name={name} avatar={avatar} />;
        })
      )}
    </div>
  );
};

export default Story;
