import ApplicantInfo from "../components/ApplicantInfo";
import Card from "../components/Card";
import Heading from "../components/Heading";
import Info from "../assets/rocket.svg";
import decagon from "../assets/about.png";

function Home() {
  const details = [
    {
      id: 1,
      title: "First Name",
      description: "Godswill",
      img: Info,
      item: false,
    },
    {
      id: 2,
      title: "Last Name",
      description: "Asensio",
      img: Info,
      item: true,
    },
    {
      id: 3,
      title: "Gender",
      description: "Male",
      img: Info,
      item: false,
    },
    {
      id: 4,
      title: "Occupation",
      description: "Developer",
      img: Info,
      item: true,
    },
  ];

  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  return (
    <div className="container">
      {/* <CompanyLogo /> */}
      <div className="main">
        <div>
          <Card>
            <Heading
              title={"Applicant Details"}
              description={"Personal Information"}
            />
            <div className="sub_main">
              {details.map((detail) => (
                <ApplicantInfo
                  key={detail.id}
                  title={detail.title}
                  description={detail.description}
                  img={detail.img}
                  item={detail.item}
                />
              ))}
            </div>
          </Card>
          <div style={{ marginTop: "16px" }}>
            <Card>
              <Heading
                title={"Applicant Details"}
                description={"Personal Information"}
              />
              <div className="wrapper">
                <ApplicantInfo
                  title={"Location"}
                  description={"Lekki"}
                  img={Info}
                />
                <ApplicantInfo
                  title={"State of Origin"}
                  description={"Imo State"}
                  img={Info}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="side-img">
          <img src={decagon} alt="decagon-img" />
        </div>
      </div>
      <ul>
        {people.map((person) => (
          <div key={person.id}>
            <li>{person.name}</li>
            <p>{person.profession}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
