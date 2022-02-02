import Head from "next/head";

const SEO = () => {
  const title = config.title;
  const siteTitle = config.title;
  const author = config.author;
  const description = config.description;
  const keywords = config.keywords;

  return (
    <Head>
      <title>{`${siteTitle}`}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
};

export default SEO;

const config = {
  title: "Advice/Quotes App",
  author: "Kemmei, Web Developer/Programmer",
  // author: {
  //   name: 'Kmi',
  //   summary: 'Web developer/programmer',
  // },
  description:
    "A very simple web app to display randomly chosen Advice or Quote fetched from Advice Slip JSON API and Quotable. A Next.js project build with Typescript, Material-UI and Redux-Toolkit.",
  keywords: "Next.js, TypeScript, Material-UI, Advice Slip JSON API, Quotable",
  social: {
    twitter: "",
  },
};
