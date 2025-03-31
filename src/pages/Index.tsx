
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCard from '../components/ArticleCard';
import Newsletter from '../components/Newsletter';
import CategoryList from '../components/CategoryList';
import TopicFilter from '../components/TopicFilter';
import { articles, topics, categories, getFeaturedArticles, getRecentArticles } from '../data/mockData';

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles();
  
  // Filter articles based on selected topic


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Featured Article */}
        {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              readTime={article.readTime}
              imageUrl={article.imageUrl}
            />
          ))}
        </section> */}
        
        <section className="mb-5">
          {featuredArticles.length > 0 && (
            <FeaturedArticle
              id={featuredArticles[0].id}
              title={featuredArticles[0].title}
              excerpt={featuredArticles[0].excerpt}
              readTime={featuredArticles[0].readTime}
              imageUrl={featuredArticles[0].imageUrl}
            />
          )}
        </section>
        {/* <section className="mb-12">
          {featuredArticles.length > 0 && (
            <FeaturedArticle
              id={featuredArticles[0].id}
              title={featuredArticles[0].title}
              excerpt={featuredArticles[0].excerpt}
              readTime={featuredArticles[0].readTime}
              imageUrl={featuredArticles[0].imageUrl}
            />
          )}
        </section> */}

        <div className="container mx-auto pb-5 pt-5">
          {/* Topic Filter */}
          
          <div className="flex flex-col lg:flex-row gap-1">
            
          Throughout human history, technological advancements have frequently emerged independently
across different civilizations. These parallel inventions illustrate the shared problem-solving
capabilities of humanity, as well as the cultural, environmental, and social influences that shape the
development and application of technology. Read to dive in to the world of parallel inventions !
            

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
