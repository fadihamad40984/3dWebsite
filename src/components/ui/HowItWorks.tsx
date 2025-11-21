import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const steps = [
  {
    number: '01',
    title: 'Integration',
    description: 'Seamlessly connect our API to your existing infrastructure using our secure SDKs.',
  },
  {
    number: '02',
    title: 'Training',
    description: 'Our neural networks analyze your data patterns to create a custom behavioral model.',
  },
  {
    number: '03',
    title: 'Deployment',
    description: 'Autonomous agents are deployed to your edge devices, ready to execute complex tasks.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Continuous learning algorithms improve efficiency and performance over time.',
  },
];

const HowItWorks = () => {
  return (
    <SectionWrapper id="how-it-works" className="bg-black/20" sectionIndex={2}>
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4"
        >
          SYSTEM <span className="text-nebula-secondary">ARCHITECTURE</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nebula-primary via-nebula-secondary to-nebula-primary opacity-30 hidden md:block" />

        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              <div className="flex-1 w-full">
                <div className={`p-6 rounded-xl bg-white/5 border border-white/10 hover:border-nebula-secondary/50 transition-colors duration-300 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                  <span className="text-6xl font-orbitron font-bold text-white/5 absolute -top-4 -right-4 select-none">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 font-orbitron relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 relative z-10">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-nebula-bg border border-nebula-secondary shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                <div className="w-2 h-2 rounded-full bg-nebula-secondary" />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;
