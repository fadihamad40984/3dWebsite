import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="max-w-3xl z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center space-x-2 mb-4">
          <div className="h-[1px] w-8 bg-nebula-secondary" />
          <span className="text-nebula-secondary uppercase tracking-[0.2em] text-sm font-bold">
            Next Gen Robotics
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-white leading-tight mb-6">
          AUTOMATING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-nebula-primary via-nebula-secondary to-nebula-primary bg-[length:200%_auto] animate-gradient">
            THE FUTURE
          </span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Experience the convergence of artificial intelligence and advanced robotics.
          Nebula Automata provides the infrastructure for the next industrial revolution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="group">
            Start Building
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button variant="outline" size="lg" className="group">
            <Play className="mr-2 w-4 h-4 fill-current" />
            Watch Demo
          </Button>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end space-y-2 text-white/50 font-mono text-xs">
        <span>SYS.STATUS: ONLINE</span>
        <span>CORE.TEMP: 34°C</span>
        <span>NET.LATENCY: 12ms</span>
      </div>
    </div>
  );
};

export default Hero;
