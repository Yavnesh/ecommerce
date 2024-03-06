import PageHeader from "@/app/components/backoffice/pageHeader";
import TableActions from "@/app/components/backoffice/tableActions";


export default function Categories() {
  return (
    <div>
      {/* header */}
      <PageHeader heading={"Categories"} href="/dashboard/categories/new" linkTitle={"Add Category"} />
      {/* Table actions */}
      {/* export || buld delete || search */}
      <TableActions />
      <div className="py-6">
          
      </div>
    </div>
  );
}
