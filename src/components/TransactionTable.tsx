
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const transactions = [
  {
    id: 1,
    date: "2024-01-01",
    description: "Salary",
    amount: 5000,
    type: "income",
  },
  {
    id: 2,
    date: "2024-01-02",
    description: "Groceries",
    amount: -200,
    type: "expense",
  },
  {
    id: 3,
    date: "2024-01-03",
    description: "Utilities",
    amount: -150,
    type: "expense",
  },
];

export const TransactionTable = () => {
  return (
    <div className="rounded-md border bg-card/50 backdrop-blur-sm animate-fade-in">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell
                className={`text-right ${
                  transaction.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {transaction.amount > 0
                  ? `+$${transaction.amount}`
                  : `-$${Math.abs(transaction.amount)}`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
