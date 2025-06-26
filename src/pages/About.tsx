import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutCheatsheet = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-16">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-light text-amber-500 dark:text-blue-200 mb-2">
              About This Cheatsheet
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light">
              A compact reference guide built for developers, by developers.
            </p>
          </div>
        </header>

        <section className="space-y-12">
          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">Purpose</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This cheatsheet app was created to provide quick access to frequently used commands, patterns, and snippets. It's designed to help developers stay productive without having to dig through extensive documentation every time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">What You'll Find</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The content is structured for clarity and speed. It includes references across:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-500 dark:text-gray-400">
              <li>Go, Python, Java, Rust, and more</li>
              <li>Linux CLI essentials</li>
              <li>Git, Docker, Kubernetes commands</li>
              <li>Debugging and performance tips</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">Technology Stack</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Built using <strong>React</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>, this app uses <strong>React Router</strong> for navigation and <code>.mdx</code> files for structured content, powered by <strong>Velite</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">Philosophy</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The goal is to make repetitive tasks easier, learning faster, and knowledge easier to revisit. Whether you're experimenting or working on a real project, this cheatsheet keeps useful info within reach.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutCheatsheet;
