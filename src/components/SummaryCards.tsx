
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowUp, ArrowDown, Percent } from "lucide-react";

export const SummaryCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 animate-fade-in">
      <Card className="backdrop-blur-sm bg-card/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Income</CardTitle>
          <ArrowUp className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$12,500</div>
        </CardContent>
      </Card>
      <Card className="backdrop-blur-sm bg-card/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          <ArrowDown className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$4,200</div>
        </CardContent>
      </Card>
      <Card className="backdrop-blur-sm bg-card/50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
          <Percent className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">66.4%</div>
        </CardContent>
      </Card>
    </div>
  );
};
