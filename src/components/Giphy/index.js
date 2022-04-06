const GiphyItem = ({ data }) => {
  // console.log(data);
  return (
    <div className="card-album">
      <img
        className="box-gif"
        src={data.images.original.url}
        alt={data.title}
      />
      <div className="text">
        <p className="title">{data.title}</p>
        <p className={`rating `}>{data.rating}</p>
      </div>
    </div>
  );
};

export default GiphyItem;
