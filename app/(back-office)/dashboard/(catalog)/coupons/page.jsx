import PageHeader from "@/app/components/backoffice/pageHeader";
import TableActions from "@/app/components/backoffice/tableActions";


export default function Coupons() {
  return (
    <div>
      {/* header */}
      <PageHeader heading={"Coupons"} href="/dashboard/coupons/new" linkTitle={"Add Coupon"} />
      {/* Table actions */}
      {/* export || buld delete || search */}
      <TableActions />
      <div className="py-6">
          
      </div>
    </div>
  );
}
