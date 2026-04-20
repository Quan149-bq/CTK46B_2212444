"use client"; 

const projects = [
  {
    title: "Bánh mì Đà Lạt",
    description: "Dự án khảo sát và xây dựng mô hình kinh doanh thương mại điện tử cho đặc sản Bánh mì tại thành phố Đà Lạt.",
    tech: ["E-commerce", "Market Research", "Logistics"],
    image: "/images/banh-mi.png", 
    status: "Đang phát triển", 
  },
  {
    title: "Game đối kháng MageBattle",
    description: "Trò chơi đối kháng trực tiếp sử dụng hiệu ứng kỹ năng phức tạp với VFX Graph trong Unity.",
    tech: ["Unity", "VFX Graph", "C#"],
    image: "/images/mage-battle.png", 
    status: "Hoàn thành", 
  },
  {
    title: "Game thám hiểm GardenOfEden",
    description: "Hành trình thám hiểm thế giới mở với đồ họa bắt mắt và cơ chế gameplay nhập vai hấp dẫn.",
    tech: ["Unity", "Character Design", "Game Dev"],
    image: "/images/garden-of-eden.png", 
    status: "Hoàn thành", 
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Dự án của tôi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
          >
            <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x250?text=Project+Image";
                }}
              />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                {/* Hiển thị trạng thái dự án với màu sắc tương ứng [cite: 938, 972, 973] */}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Hoàn thành" 
                  ? "bg-green-100 text-green-700" 
                  : "bg-yellow-100 text-yellow-700"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-5 line-clamp-3 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}