
import { DashboardLayout } from "@/components/DashboardLayout";
import { SummaryCards } from "@/components/SummaryCards";
import { TransactionTable } from "@/components/TransactionTable";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Your financial overview at a glance
          </p>
        </div>
        <SummaryCards />
        <div>
          <h2 className="text-xl font-semibold tracking-tight mb-4">
            Recent Transactions
          </h2>
          <TransactionTable />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
