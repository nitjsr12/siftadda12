import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Users,
  Building2,
  FileText,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "2,543",
    change: "+12.5%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Active Businesses",
    value: "1,250",
    change: "+8.2%",
    trend: "up",
    icon: Building2,
  },
  {
    title: "Quote Requests",
    value: "3,127",
    change: "-2.1%",
    trend: "down",
    icon: FileText,
  },
  {
    title: "Monthly Revenue",
    value: "₹85,420",
    change: "+15.3%",
    trend: "up",
    icon: TrendingUp,
  },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
          const trendColor = stat.trend === "up" ? "text-green-500" : "text-red-500";

          return (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className={cn("flex items-center", trendColor)}>
                  <TrendIcon className="h-4 w-4 mr-1" />
                  {stat.change}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
}