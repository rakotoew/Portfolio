import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";
import styles from "@styles/pages/stacks.module.css";
import CardStack from "@components/CardStack";

function Stack(): JSX.Element {
    const t = useTranslations("stack");
    return (
        <div className={styles.stacks_page}>
            <h1 className={styles.title}>{t("title")}</h1>
            <h2 className={styles.categorie_title}>{t("lang")}</h2>
            <div className={styles.categorie_container}>
                <CardStack title="Java" path="/icons/logo/lang/logo-java.png"/>
                <CardStack title="Python" path="/icons/logo/lang/logo-python.png"/>
                <CardStack title="Typescript" path="/icons/logo/lang/logo-typescript.png"/>
                <CardStack title="Javascript" path="/icons/logo/lang/logo-javascript.png"/>
                <CardStack title="C" path="/icons/logo/lang/logo-c.png"/>
                <CardStack title="C++" path="/icons/logo/lang/logo-cpp.png"/>
                <CardStack title="C#" path="/icons/logo/lang/logo-csharp.svg"/>
                <CardStack title="CSS" path="/icons/logo/lang/logo-css.png"/>
            </div>
            <h2 className={styles.categorie_title}>{t("frameworks")}</h2>
            <div className={styles.categorie_container}>
                <CardStack title="Angular" path="/icons/logo/frameworks/logo-angular.png"/>
                <CardStack title="React" path="/icons/logo/frameworks/logo-react.png"/>
                <CardStack title="Next" path="/icons/logo/frameworks/logo-next.png"/>
                <CardStack title="NestJS" path="/icons/logo/frameworks/logo-nestjs.png"/>
                <CardStack title="Spring Boot" path="/icons/logo/frameworks/logo-spring.png"/>
                <CardStack title="Tailwind" path="/icons/logo/frameworks/logo-tailwind.png"/>
                <CardStack title="Pico" path="/icons/logo/frameworks/logo-picocss.png"/>
                <CardStack title="GraphQL" path="/icons/logo/database/logo-graphql.png"/>
                <CardStack title="Jest" path="/icons/logo/frameworks/logo-jest.png"/>
                <CardStack title="JUnit 5" path="/icons/logo/frameworks/logo-junit5.png"/>
            </div>
            <h2 className={styles.categorie_title}>{t("database")}</h2>
            <div className={styles.categorie_container}>
                <CardStack title="mySQL" path="/icons/logo/database/logo-mysql.png"/>
                <CardStack title="PostgreSQL" path="/icons/logo/database/logo-postgre.png"/>
                <CardStack title="MongoDB" path="/icons/logo/database/logo-mongodb.png"/>
                <CardStack title="Neo4j" path="/icons/logo/database/logo-neo4j.png"/>
                <CardStack title="Firebase" path="/icons/logo/database/logo-firebase.png"/>
            </div>
            <h2 className={styles.categorie_title}>{t("tools")}</h2>
            <div className={styles.categorie_container}>
                <CardStack title="Docker" path="/icons/logo/tools/logo-docker.png"/>
                <CardStack title="Kubernetes" path="/icons/logo/tools/logo-kubernetes.png"/>
                <CardStack title="GitLab" path="/icons/logo/tools/logo-gitlab.png"/>
                <CardStack title="Github" path="/icons/logo/tools/logo-github.svg"/>
                <CardStack title="Jira" path="/icons/logo/tools/logo-jira.svg"/>
                <CardStack title="InteliJ" path="/icons/logo/tools/logo-intellij.svg"/>
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: require(`../lang/${locale}.json`),
        }
    };
};
export default Stack;