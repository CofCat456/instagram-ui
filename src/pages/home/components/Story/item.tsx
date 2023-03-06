interface Props {
  name: string;
  avatar: string;
}

const Item: React.FC<Props> = ({ name, avatar }) => {
  return (
    <div className="text-center">
      <div
        className="mx-[11px] h-[56px] w-[56px] overflow-hidden rounded-full border-2 border-white p-[3px] ring-2 ring-red-500"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <p className="mt-1 text-xs">{name}</p>
    </div>
  );
};

export default Item;
