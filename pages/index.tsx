import Header from "../components/Header";
import Hero from "../components/hero";
import Layout from "../components/Layout";
import ArticleCard1 from "../components/ArticleCard1";
import NewsCard from "../components/NewsCard";
import ArticleCard3 from "../components/ArticleCard3";
import AleatoireCard from "../components/AleatoireCard";
import YoutubeCard from "../components/YoutubeCard";

const IndexPage = () => (
  <Layout title="L'Eclosion">
    <Hero />
    <Header />
    {/* Card accueil */}
    <div className="w-full m-auto max-w-7xl">
      <ArticleCard3 />
      <NewsCard />
      <ArticleCard1 />
      <AleatoireCard />
      <YoutubeCard />
    </div>
  </Layout>
);

export default IndexPage;
