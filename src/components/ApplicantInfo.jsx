import "./ApplicantInfo.css";
// eslint-disable-next-line react/prop-types
function ApplicantInfo({ title, description, img}) {
  return (
    <div className="applicantInfo">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      {/* <p>{item ? 'Item is a boolean' : 'Item is not a boolean'}</p> */}
    </div>
  );
}

export default ApplicantInfo;
