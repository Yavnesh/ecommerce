import CustomDataTable from "@/app/components/backoffice/customDataTable";
import DashboardCharts from "@/app/components/backoffice/dashboardCharts";
import Heading from "@/app/components/backoffice/heading";
import LargeCards from "@/app/components/backoffice/largeCards";
import SmallCards from "@/app/components/backoffice/smallCards";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* Large cards   */}
      <LargeCards />
      {/* Small cards */}
      <SmallCards />
      {/* Charts */}
      <DashboardCharts />
      {/* Recent Order Table */}
      {/* <CustomDataTable /> */}
    </div>
  );
}
