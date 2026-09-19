export default function Review({ quote, name, meta }) {
  return (
    <article className="review">
      <div className="stars">★★★★★</div>

      <p>“{quote}”</p>

      <strong>{name}</strong>

      <small>{meta}</small>
    </article>
  );
}