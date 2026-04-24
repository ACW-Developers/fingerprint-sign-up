const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-4 sm:px-6 md:px-8 py-4 relative">
      {/* Heading */}
      <div className="relative mb-3">
        <div className="text-center py-1 text-3xl sm:text-4xl xl:text-5xl font-bold text-black/5">
          SKILLS
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg sm:text-xl md:text-2xl font-semibold">
          My Strengths
        </h1>
      </div>

      {/* Skills Sections */}
      <div className="space-y-2.5">
        {/* Programming Languages */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-1 font-bold text-black/80">Programming Languages</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Python</span>
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">JavaScript</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">PHP</span>
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">Java</span>
          </div>
        </div>

        {/* Frameworks & Technologies */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-1 font-bold text-black/80">Frameworks & Technologies</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">Django</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Vue.js</span>
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">React.js</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Laravel</span>
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">Tailwind CSS</span>
          </div>
        </div>

        {/* Database Management */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-1 font-bold text-black/80">Database Management</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Firebase</span>
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">MySQL</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">PostgreSQL</span>
          </div>
        </div>

        {/* Development Tools */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-1 font-bold text-black/80">Development Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">VS Code</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">IntelliJ IDEA</span>
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">Git & GitHub</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Android Studio</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Render</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Neon</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Docker</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-1 font-bold text-black/80">Soft Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Problem-Solving</span>
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">Time Management</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Teamwork</span>
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">Communication</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Adaptability</span>
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">Integrity</span>
          </div>
        </div>

        {/* Deployment */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-1 font-bold text-black/80">Deployment</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary/10 px-3 py-1 rounded text-sm">Hostpinnacle</span>
            <span className="bg-primary/20 px-3 py-1 rounded text-sm">Netlify</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;