import "./App.css";
import Card from "./Card";
import supervisor from "./images/icon-supervisor.svg";
import teamBuilder from "./images/icon-team-builder.svg";
import karma from "./images/icon-karma.svg";
import calculator from "./images/icon-calculator.svg";

function App() {
  const data = [
    {
      title: "Supervisor",
      description: "Monitors activity to identify project roadblocks",
    },
    {
      title: "Team Builder",
      description:
        "Scans our talent network to create the optimal team for your project",
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
    },
    {
      title: "Calculator",
      description:
        "Uses data from past projects to provide better delivery estimates",
    },
  ];
  return (
    <main>
      <section className="introduction">
        <h1>Reliable, efficient delivery</h1>
        <h1>Powered by Technology</h1>
        <p>
          {" "}
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </section>
      <section className="service_overview">
        <Card
          title={data[0].title}
          description={data[0].description}
          svg={supervisor}
          borderTop="hsl(180, 62%, 55%)"
        />
        <div className="middle">
          <Card
            title={data[1].title}
            description={data[1].description}
            svg={teamBuilder}
            borderTop="hsl(0, 78%, 62%)"
          />
          <Card
            title={data[2].title}
            description={data[2].description}
            svg={karma}
            borderTop="hsl(34, 97%, 64%)"
          />
        </div>
        <Card
          title={data[3].title}
          description={data[3].description}
          svg={calculator}
          borderTop="hsl(212, 86%, 64%)"
        />
      </section>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Phuong Tran</a>.
        </p>
      </footer>
    </main>
  );
}

export default App;
