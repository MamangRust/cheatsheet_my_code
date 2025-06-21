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
              A curated collection of quick references for developers.
            </p>
          </div>
        </header>

        <section className="space-y-12">
          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">Why Cheatsheets?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              As developers, we often revisit the same syntax, tools, and commands. This cheatsheet app was born out of the need to organize quick reference notes—especially for those times when StackOverflow feels like overkill and documentation is too verbose.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">What's Inside?</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This site includes concise guides, minimal examples, and code blocks across various languages like:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-500 dark:text-gray-400">
              <li>Rust, Go, Python, JavaScript</li>
              <li>Linux CLI tricks</li>
              <li>Git, Docker, Kubernetes commands</li>
              <li>Common debugging & performance tips</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">How It's Built</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This app is built using <strong>React</strong> + <strong>Vite</strong>, with <strong>React Router</strong> and <strong>Tailwind CSS</strong>. The cheatsheet content is written in <code>.mdx</code> files and parsed using a custom content layer powered by Velite.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-amber-500 dark:text-blue-200 mb-4">Goals</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This app is not just for personal productivity—it aims to help developers stay in flow, reduce context switching, and encourage knowledge sharing through practical examples and repeatable patterns.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutCheatsheet;
