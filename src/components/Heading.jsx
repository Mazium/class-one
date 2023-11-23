import "./Heading.css";
// eslint-disable-next-line react/prop-types
function Heading({title, description}) {
  return (
  <div className="heading_text">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>)
}

export default Heading;
