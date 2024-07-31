import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";

function About(): JSX.Element {
    const t = useTranslations("about");
    return (
        <div>
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

export default About;