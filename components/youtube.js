export function YouTube({ id }) {
  return (
    <div className="pb-[56.25%] relative h-[0] overflow-hidden max-w-full mt-1.5 mb-5 rounded-[4px]">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full border-0"
      />
    </div>
  );
}
