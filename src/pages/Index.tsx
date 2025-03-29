
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
  const filteredArticles = selectedTopic 
    ? recentArticles.filter(article => 
        article.category.toLowerCase() === topics.find(t => t.id === selectedTopic)?.name.toLowerCase()
      )
    : recentArticles;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Featured Article */}
        <section className="mb-12">
          {featuredArticles.length > 0 && (
            <FeaturedArticle
              id={featuredArticles[0].id}
              title={featuredArticles[0].title}
              excerpt={featuredArticles[0].excerpt}
              category={featuredArticles[0].category}
              author={featuredArticles[0].author}
              date={featuredArticles[0].date}
              readTime={featuredArticles[0].readTime}
              imageUrl={featuredArticles[0].imageUrl}
            />
          )}
        </section>

        <div className="container mx-auto px-4 pb-12">
          {/* Topic Filter */}
          <section className="mb-8">
            <h2 className="font-serif text-2xl font-bold mb-6">Explore by Topic</h2>
            <TopicFilter 
              topics={topics} 
              selectedTopic={selectedTopic} 
              onSelectTopic={setSelectedTopic} 
            />
          </section>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <section>
                <h2 className="font-serif text-2xl font-bold mb-6">
                  {selectedTopic 
                    ? `Articles in ${topics.find(t => t.id === selectedTopic)?.name}` 
                    : 'Latest Articles'}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredArticles.map(article => (
                    <ArticleCard
                      key={article.id}
                      id={article.id}
                      title={article.title}
                      excerpt={article.excerpt}
                      category={article.category}
                      author={article.author}
                      date={article.date}
                      readTime={article.readTime}
                      imageUrl={article.imageUrl}
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8">
              {/* Categories */}
              <CategoryList title="Categories" categories={categories} />
              
              {/* Newsletter */}
              <Newsletter />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
