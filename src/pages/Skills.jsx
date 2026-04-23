const Skills = () => {
  return (
    <div className="h-full page-shadow bg-white px-4 sm:px-6 py-3">
      <div className="relative mb-3">
        <div className="text-center text-3xl sm:text-4xl font-bold text-black/5">
          SKILLS
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base sm:text-lg font-semibold">
          My Strengths
        </h1>
      </div>

      <div className="space-y-2.5">
        {SkillGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs sm:text-sm mb-1 font-bold text-black/80">
              {group.title}
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item, i) => (
                <span
                  key={item}
                  className={`${i % 2 === 0 ? "bg-primary/20" : "bg-primary/10"} px-2 py-0.5 rounded text-[10px] sm:text-xs`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillGroups = [
  { title: "Programming Languages", items: ["Python", "JavaScript", "PHP", "Java"] },
  { title: "Frameworks & Technologies", items: ["Django", "Vue.js", "React.js", "Laravel", "Tailwind CSS"] },
  { title: "Database Management", items: ["Firebase", "MySQL", "PostgreSQL"] },
  { title: "Development Tools", items: ["VS Code", "IntelliJ IDEA", "Git & GitHub", "Android Studio", "Render", "Neon", "Docker"] },
  { title: "Soft Skills", items: ["Problem-Solving", "Time Management", "Teamwork", "Communication", "Adaptability", "Integrity"] },
  { title: "Deployment", items: ["Hostpinnacle", "Netlify"] },
];

export default Skills;