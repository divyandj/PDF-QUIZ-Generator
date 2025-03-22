
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  details = [],
  delay = 0 
}) => {
  const delayClass = `animate-delay-${delay}`;

  return (
    <div 
      className={`glass-card p-6 opacity-0 animate-fade-in ${delayClass} hover:translate-y-[-5px] transition-transform duration-300`}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-light-teal to-deep-blue flex items-center justify-center mb-4">
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      
      {details.length > 0 && (
        <ul className="text-white/70 text-sm space-y-2 border-t border-white/10 pt-3 mt-3">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-light-teal mt-1.5 mr-2"></span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeatureCard;
