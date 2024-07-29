import { GetStaticProps } from "next";
import { useTranslations } from "use-intl";

function Stack(): JSX.Element {
    const t = useTranslations("stack");
    return (
        <div>
            <h1>{t("title")}</h1>
            <h2>{t("lang")}</h2>
            <div></div>
            <h2>{t("frameworks")}</h2>
            <div></div>
            <h2>{t("database")}</h2>
            <div></div>
            <h2>{t("tools")}</h2>
            <div></div>
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