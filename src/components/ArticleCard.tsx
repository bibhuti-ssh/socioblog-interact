
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { Badge } from './ui/badge';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  // category: string;
  // author: string;
  // date: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  excerpt,
  readTime,
  imageUrl,
  featured = false,
}) => {
  return (
    <article className={`article-card bg-white rounded-lg overflow-hidden border border-gray-200 ${featured ? 'md:flex' : ''}`}>
      <Link to={`/article/${id}`} className={`block ${featured ? 'md:w-1/2' : ''}`}>
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full h-48 object-cover ${featured ? 'md:h-full' : ''}`}
        />
      </Link>
      <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
        <div className="mb-3">
        </div>
        <Link to={`/article/${id}`}>
          <h3 className={`font-serif ${featured ? 'text-2xl md:text-3xl' : 'text-xl'} mb-2 hover:text-socio-accent transition-colors`}>
            {title}
          </h3>
        </Link>
        <p className="text-socio-gray mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center text-sm text-socio-gray">
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
          <span className="mx-2">•</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
