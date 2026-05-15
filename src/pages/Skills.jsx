const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-10 py-2 relative">
      {/* Heading */}
      <div className="relative mb-2">
        <div className="text-center py-1 text-5xl xl:text-7xl font-bold text-black/5">
          SKILLS
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
          My Strengths
        </h1>
      </div>

      {/* Skills Sections */}
      <div className="space-y-3">
        {/* Programming Languages */}
        <div>
          <h1 className="text-2xl md:text-3xl mb-1 font-bold text-black/80">Programming Languages</h1>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/20 px-3 py-1 rounded">Python</span>
            <span className="bg-primary/10 px-3 py-1 rounded">JavaScript</span>
            <span className="bg-primary/20 px-3 py-1 rounded">PHP</span>
            <span className="bg-primary/10 px-3 py-1 rounded">Java</span>
          </div>
        </div>

        {/* Frameworks & Technologies */}
        <div>
          <h1 className="text-2xl md:text-3xl mb-1 font-bold text-black/80">Frameworks & Technologies</h1>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 px-3 py-1 rounded">Django</span>
            <span className="bg-primary/20 px-3 py-1 rounded">Vue.js</span>
            <span className="bg-primary/10 px-3 py-1 rounded">React.js</span>
            <span className="bg-primary/20 px-3 py-1 rounded">Laravel</span>
            <span className="bg-primary/10 px-3 py-1 rounded">Tailwind CSS</span>
          </div>
        </div>

        {/* Database Management */}
        <div>
          <h1 className="text-2xl md:text-3xl mb-1 font-bold text-black/80">Database Management</h1>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/20 px-3 py-1 rounded">Firebase</span>
            <span className="bg-primary/10 px-3 py-1 rounded">MySQL</span>
            <span className="bg-primary/20 px-3 py-1 rounded">PostgreSQL</span>
          </div>
        </div>

        {/* Development Tools */}
        <div>
          <h1 className="text-2xl md:text-3xl mb-1 font-bold text-black/80">Development Tools</h1>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 px-3 py-1 rounded">Visual Studio Code</span>
            <span className="bg-primary/20 px-3 py-1 rounded">IntelliJ IDEA</span>
            <span className="bg-primary/10 px-3 py-1 rounded">Git & GitHub</span>
            <span className="bg-primary/20 px-3 py-1 rounded">Android Studio</span>
            <span className="bg-primary/20 px-3 py-1 rounded">Render</span>
            <span className="bg-primary/20 px-3 py-1 rounded">Neon</span>
            <span className="bg-primary/20 px-3 py-1 rounded">Docker</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h1 className="text-2xl md:text-3xl mb-1 font-bold text-black/80">Soft Skills</h1>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/20 px-3 py-1 rounded">Analytical & Problem-Solving</span>
            <span className="bg-primary/10 px-3 py-1 rounded">Time Management</span>
            <span className="bg-primary/20 px-3 py-1 rounded">Teamwork</span>
            <span className="bg-primary/10 px-3 py-1 rounded">Communication</span>
            <span className="bg-primary/20 px-3 py-1 rounded">Adaptability</span>
            <span className="bg-primary/10 px-3 py-1 rounded">Integrity</span>
          </div>
        </div>

        {/* Networking */}
        <div>
          <h1 className="text-2xl md:text-3xl mb-1 font-bold text-black/80">Deployment</h1>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 px-3 py-1 rounded">Hostpinnacle</span>
            <span className="bg-primary/20 px-3 py-1 rounded">Netlify</span>
          </div>
        </div>
      </div>

      {/* Beautiful Next Page Button */}
      <div className="absolute bottom-6 right-6">
  <button 
    className="py-2 px-4 bg-gradient-to-r from-primary to-purple-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 flex items-center justify-center space-x-2"
    onClick={() => {/* Add your navigation logic here */}}
  >
    <span className="font-medium">Next page</span>
  </button>
</div>

    </div>
  );
};

export default Skills;