import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Card from './Card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nebula Automata has completely revolutionized our manufacturing process. The efficiency gains are unprecedented.",
    author: "Sarah Chen",
    role: "CTO, CyberDynamics",
  },
  {
    quote: "The level of autonomy achieved by these agents is mind-blowing. It's like watching science fiction become reality.",
    author: "Marcus Thorne",
    role: "Director of Innovation, TechCore",
  },
  {
    quote: "Seamless integration and robust security. Exactly what we needed for our critical infrastructure.",
    author: "Elena Rodriguez",
    role: "Head of Security, GlobalNet",
  },
];

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" sectionIndex={3}>
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4"
        >
          CLIENT <span className="text-nebula-secondary">INTEL</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card variant="glass" className="h-full flex flex-col">
              <Quote className="w-8 h-8 text-nebula-primary mb-6 opacity-50" />
              <p className="text-gray-300 text-lg italic mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-white font-orbitron">{testimonial.author}</div>
                <div className="text-sm text-nebula-secondary">{testimonial.role}</div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
