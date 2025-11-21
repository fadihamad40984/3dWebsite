import { motion } from 'framer-motion';
import { Cpu, Globe, Shield, Zap, Network, Bot } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Card from './Card';

const features = [
  {
    icon: Bot,
    title: 'Autonomous Agents',
    description: 'Self-learning AI agents capable of complex decision making and task execution in real-time environments.',
  },
  {
    icon: Network,
    title: 'Neural Networks',
    description: 'Advanced deep learning architecture mimicking biological neural pathways for superior pattern recognition.',
  },
  {
    icon: Globe,
    title: 'Global Connectivity',
    description: 'Low-latency distributed network ensuring seamless synchronization across all robotic units worldwide.',
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'Quantum-resistant encryption protocols protecting your infrastructure from next-gen cyber threats.',
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Edge computing capabilities delivering microsecond response times for critical operations.',
  },
  {
    icon: Cpu,
    title: 'Custom Hardware',
    description: 'Proprietary silicon designed specifically for AI workloads, maximizing efficiency and performance.',
  },
];

const Features = () => {
  return (
    <SectionWrapper id="features" sectionIndex={1}>
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4"
        >
          CORE <span className="text-nebula-secondary">CAPABILITIES</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Powered by cutting-edge technology to deliver unparalleled performance and reliability.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-nebula-primary/20 rounded-lg flex items-center justify-center mb-6 text-nebula-primary group-hover:text-white group-hover:bg-nebula-primary transition-colors duration-300">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
