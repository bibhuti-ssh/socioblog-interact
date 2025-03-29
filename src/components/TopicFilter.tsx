
import React from 'react';
import { Button } from './ui/button';

interface Topic {
  id: string;
  name: string;
}

interface TopicFilterProps {
  topics: Topic[];
  selectedTopic: string | null;
  onSelectTopic: (topicId: string | null) => void;
}

const TopicFilter: React.FC<TopicFilterProps> = ({ topics, selectedTopic, onSelectTopic }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button
        variant={selectedTopic === null ? "default" : "outline"}
        onClick={() => onSelectTopic(null)}
        className="rounded-full"
      >
        All
      </Button>
      {topics.map((topic) => (
        <Button
          key={topic.id}
          variant={selectedTopic === topic.id ? "default" : "outline"}
          onClick={() => onSelectTopic(topic.id)}
          className="rounded-full"
        >
          {topic.name}
        </Button>
      ))}
    </div>
  );
};

export default TopicFilter;
