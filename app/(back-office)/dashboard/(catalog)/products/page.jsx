import PageHeader from "@/app/components/backoffice/pageHeader";
import TableActions from "@/app/components/backoffice/tableActions";


export default function Products() {
  return (
    <div>
      {/* header */}
      <PageHeader heading={"Products"} href="/dashboard/products/new" linkTitle={"Add Products"} />
      {/* Table actions */}
      {/* export || buld delete || search */}
      <TableActions />
      <div className="py-6">
          
      </div>
    </div>
  );
}
