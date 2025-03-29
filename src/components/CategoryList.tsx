
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  articleCount: number;
}

interface CategoryListProps {
  title: string;
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ title, categories }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="font-serif text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
            <Link 
              to={`/category/${category.id}`} 
              className="hover:text-socio-accent transition-colors"
            >
              {category.name}
            </Link>
            <span className="text-socio-gray text-sm bg-socio-light-gray px-2 py-1 rounded-full">
              {category.articleCount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
