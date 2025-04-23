import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Pour plus de spam et d'hirondelles",
    titleLink: "https://www.youtube.com/user/MontyPython",
    Svg: require("@site/static/img/Monty-Python.svg").default,
    description: (
      <>
        Python tient son nom de la troupe de comédiens britanniques les Monty
        Python. Lorsque vous êtes tanné de lire les notes de cours, vous pouvez
        consulter leur page youtube.
      </>
    ),
  },
];

const CourseList = [
  {
    title: "Cours 420-2C3-MA",
    titleLink: "https://archambaultv-prof.github.io/2025H-420-2C3-MA/",
    Svg: require("@site/static/img/2C3.svg").default,
    description: (
      <>
      Site web du cours 420-2C3-MA à la session
      d'hiver 2025.
      </>
    ),
  },
  {
    title: "Cours 420-910-MA",
    titleLink: "https://archambaultv-prof.github.io/2025H-420-910-MA/",
    Svg: require("@site/static/img/910.svg").default,
    description: (
      <>
      Site web du cours 420-910-MA débutant en avril 2025.
      </>
    ),
  },
];

function Feature({ Svg, title, titleLink, description, colSize = "col--6" }) {
  return (
    <div className={clsx("col", colSize)}>
      <div className="text--center">
        {titleLink ? (
          <a href={titleLink}>
            <Svg className={styles.featureSvg} alt={title} />
          </a>
        ) : (
          <Svg className={styles.featureSvg} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        {titleLink ? (
          <Heading as="h3">
            <a href={titleLink}>{title}</a>
          </Heading>
        ) : (
          <Heading as="h3">{title}</Heading>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
    <div className={clsx("container", "padding-top--lg")}>
    <h2>📚 Cours en lien avec ce site web</h2>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {CourseList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    </div>
    <div className={clsx("container", "padding-top--lg")}>
      <h2>🐍 Et maintenant, pour quelque chose de complètement différent</h2>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} colSize="col--12" {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
    </>

  );
}
