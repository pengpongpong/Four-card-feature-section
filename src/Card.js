import "./Card.css";

function Card({ title, description, svg, borderTop }) {
  return (
    <div className="card" style={{ borderTop: `4px solid ${borderTop}` }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div class="image">
        <img src={svg} alt={title}></img>
      </div>
    </div>
  );
}

export default Card;
