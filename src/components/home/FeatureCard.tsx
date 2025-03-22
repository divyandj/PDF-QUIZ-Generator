
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
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
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
