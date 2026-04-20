import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
 <h1 className="text-3xl font-bold mb-6">Dự án</h1>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {projects.map((project, index) => (
 <Card key={index} className="hover:shadow-md transition-shadow">
 <CardHeader>
 <div className="flex items-center justify-between">
 <CardTitle className="text-lg">{project.title}</CardTitle>
 <Badge
 variant={
 project.status === "Hoàn thành" ? "default" : "secondary"
 }
 >
 {project.status}
 </Badge>
 </div>
 <CardDescription>{project.description}</CardDescription>
 </CardHeader>
 <CardContent>
 <div className="flex flex-wrap gap-2">
 {project.tech.map((t) => (
 <Badge key={t} variant="outline">
 {t}
 </Badge>
 ))}
 </div>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 );
}