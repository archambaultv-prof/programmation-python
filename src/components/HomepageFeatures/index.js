import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Cours 420-2C3-MA",
    Svg: require("@site/static/img/2C3.svg").default,
    description: (
      <>
        Pour les informations spécifiques à la session d’hiver 2025, les
        étudiants du{" "}
        <a
          href="https://www.cmaisonneuve.qc.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Collège de Maisonneuve{" "}
        </a>
        peuvent consulter{" "}
        <a
          href="https://archambaultv-prof.github.io/2025H-420-2C3-MA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          le site dédié.
        </a>
      </>
    ),
  },
  {
    title: "Pour plus de spam et d'hirondelles",
    Svg: require("@site/static/img/Monty-Python.svg").default,
    description: (
      <>
        Python tient son nom de la troupe de comédiens britanniques les Monty
        Python. Lorsque vous êtes tanné de lire les notes de cours, vous pouvez
        consulter leur{" "}
        <a
          href="https://www.youtube.com/user/MontyPython"
          target="_blank"
          rel="noopener noreferrer"
        >
           page YouTube officielle.
        </a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
