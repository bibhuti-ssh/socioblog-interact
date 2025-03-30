
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import Newsletter from '../components/Newsletter';
import ArticleCard from '../components/ArticleCard';
import { getArticleById, getRecentArticles } from '../data/mockData';
import { Calendar, Clock, User, Share2, Bookmark } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const article = getArticleById(id || '');
  const relatedArticles = getRecentArticles(3);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="text-socio-accent hover:underline">
              Return to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard",
      });
    }
  };

  const handleBookmark = () => {
    toast({
      title: "Article bookmarked!",
      description: "This article has been added to your bookmarks",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Article Header */}
        <div className="bg-socio-light-blue py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            <p className="text-lg text-socio-gray mb-6 max-w-3xl">
              {article.excerpt}
            </p>
            
            <div className="flex items-center space-x-4">             
              <div className="flex space-x-4 text-socio-gray text-sm">

                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Article */}
            <article className="lg:w-2/3">
              {/* Featured Image */}
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
              
              {/* Action Buttons */}
              <div className="flex justify-end mb-6">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center mr-3"
                  onClick={handleShare}
                >
                  <Share2 size={16} className="mr-2" />
                  Share
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center"
                  onClick={handleBookmark}
                >
                  <Bookmark size={16} className="mr-2" />
                  Bookmark
                </Button>
              </div>
              
              {/* Article Content */}
              <div className="article-content prose prose-lg max-w-none">
                {article.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{paragraph.replace('# ', '')}</h1>;
                  } else if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('* ')) {
                    return <li key={index} className="ml-6 mb-2">{paragraph.replace('* ', '')}</li>;
                  } else if (paragraph.match(/^\d+\. /)) {
                    return <li key={index} className="ml-6 mb-2">{paragraph.replace(/^\d+\. /, '')}</li>;
                  } else if (paragraph.trim() === '') {
                    return null;
                  } else {
                    return <p key={index} className="my-4">{paragraph}</p>;
                  }
                })}
              </div>
              
              {/* Author Bio */}
              
            </article>
            
            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8">
              {/* Related Articles */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-serif text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {relatedArticles.map(relatedArticle => (
                    <div key={relatedArticle.id} className="flex border-b border-gray-100 pb-4 last:border-0">
                      <Link to={`/article/${relatedArticle.id}`} className="w-1/3">
                        <img
                          src={relatedArticle.imageUrl}
                          alt={relatedArticle.title}
                          className="w-full h-16 object-cover rounded"
                        />
                      </Link>
                      <div className="w-2/3 pl-4">
                        <Link to={`/article/${relatedArticle.id}`} className="font-medium hover:text-socio-accent transition-colors">
                          {relatedArticle.title}
                        </Link>
                        <div className="text-xs text-socio-gray mt-1">
                           • {relatedArticle.readTime}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <Newsletter />
            </aside>
          </div>
          
          {/* Recommended Reading */}
          <section className="mt-16">
            <h2 className="font-serif text-2xl font-bold mb-6">Recommended Reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map(article => (
                <ArticleCard
                  key={article.id}
                  id={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  readTime={article.readTime}
                  imageUrl={article.imageUrl}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
