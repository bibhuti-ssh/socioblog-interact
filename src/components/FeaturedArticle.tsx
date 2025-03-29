
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Clock, User } from 'lucide-react';

interface FeaturedArticleProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  id,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  imageUrl,
}) => {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-[60vh] md:h-[70vh]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <Badge className="mb-4 bg-socio-blue hover:bg-socio-blue/90">
            {category}
          </Badge>
          <Link to={`/article/${id}`}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 hover:text-socio-accent/90 transition-colors">
              {title}
            </h1>
          </Link>
          <p className="text-white/90 text-lg mb-6 max-w-3xl">
            {excerpt}
          </p>
          <div className="flex items-center text-white/80">
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>{author}</span>
            </div>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <span>{readTime}</span>
            </div>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
