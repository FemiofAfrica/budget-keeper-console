
import { MessageCircle, PieChart, FileText } from "lucide-react";
import { Button } from "./ui/button";

export const DashboardSidebar = () => {
  return (
    <aside className="w-64 border-r bg-card p-6 hidden md:block animate-slide-in">
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <MessageCircle className="mr-2 h-4 w-4" />
          Chatbot
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <FileText className="mr-2 h-4 w-4" />
          Transactions
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <PieChart className="mr-2 h-4 w-4" />
          Reports
        </Button>
      </nav>
    </aside>
  );
};
