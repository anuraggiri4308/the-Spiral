import { motion } from "framer-motion";

// TypeScript props
interface IconProps {
  size?: number;
}

// Cleaner LinkedIn icon (minimal modern style)
function LinkedInIcon({ size = 18 }: IconProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex items-center justify-center bg-white text-black rounded-sm font-bold text-xs"
    >
      in
    </div>
  );
}

// LEFT → RIGHT loading animation (like typical loader)
function LoadingSpiralText(): JSX.Element {
  const letters = "SPIRAL".split("");

  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {letters.map((letter: string, i: number) => (
        <motion.span
          key={i}
          className="text-xl font-semibold text-gray-400"
          animate={{
            color: ["#9CA3AF", "#000000", "#9CA3AF"],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

export default function ComingSoon(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center"
      >
        <h1 className="text-3xl font-semibold text-gray-800 mb-3">
          Coming Soon
        </h1>

        <p className="text-gray-500 mb-6">
          We're working on something amazing. Stay tuned!
        </p>

        {/* Loading animation */}
        <LoadingSpiralText />

        <a
          href="https://www.linkedin.com/company/thespiral-ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
        >
          <LinkedInIcon size={18} />
          Follow on LinkedIn
        </a>
      </motion.div>
    </div>
  );
}
