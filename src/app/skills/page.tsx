const skills = [
  "JavaScript", 
  "TypeScript", 
  "React", 
  "Next.JS", 
  "Git", 
  "SQL", 
  "Node.js"
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Kỹ năng của tôi</h1>
     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div 
            key={skill} 
            className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-600 border border-gray-100 transition-colors cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}