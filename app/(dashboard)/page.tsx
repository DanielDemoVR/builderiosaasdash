import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, ArrowDownRight, Download, LineChart } from "lucide-react";

const stats = [
  {
    label: "Monthly Revenue",
    value: "$124,230",
    change: "+8.4%",
    positive: true,
  },
  { label: "Active Users", value: "14,582", change: "+3.1%", positive: true },
  { label: "Conversion Rate", value: "4.8%", change: "+0.6%", positive: true },
  { label: "Churn Rate", value: "1.9%", change: "-0.2%", positive: true },
];

const transactions = [
  {
    id: "INV-87421",
    customer: "Globex Corp",
    plan: "Pro",
    amount: 129.0,
    status: "Paid",
    date: "2026-03-11",
  },
  {
    id: "INV-87420",
    customer: "Initech",
    plan: "Business",
    amount: 399.0,
    status: "Paid",
    date: "2026-03-10",
  },
  {
    id: "INV-87419",
    customer: "Hooli",
    plan: "Enterprise",
    amount: 1299.0,
    status: "Refunded",
    date: "2026-03-09",
  },
  {
    id: "INV-87418",
    customer: "Vandelay Industries",
    plan: "Starter",
    amount: 29.0,
    status: "Pending",
    date: "2026-03-09",
  },
  {
    id: "INV-87417",
    customer: "Soylent Corp",
    plan: "Pro",
    amount: 129.0,
    status: "Paid",
    date: "2026-03-08",
  },
];

export default function Page() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Main Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Overview of key metrics for your SaaS business.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <LineChart className="mr-2 h-4 w-4" /> Create New Report
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="pb-2">
              <CardDescription>{s.label}</CardDescription>
              <CardTitle className="text-2xl">{s.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {s.positive ? (
                  <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-600" />
                )}
                <span className={s.positive ? "text-emerald-600" : "text-red-600"}>
                  {s.change}
                </span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main chart area placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue & Users</CardTitle>
          <CardDescription>Last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>

      {/* Global Activity Section */}
      <div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            Global Activity
          </h3>
          <p className="text-sm text-muted-foreground">
            Real-time metrics from around the world
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Top Country</CardDescription>
              <CardTitle className="text-2xl">USA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">45% of traffic</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Sessions</CardDescription>
              <CardTitle className="text-2xl">1,240</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Currently online</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Server Status</CardDescription>
              <CardTitle className="text-2xl">Operational</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-600 mr-2"></span>
                All systems operational
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest invoices from the past week</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((t) => (
                <TableRow key={t.id}>
                  <TableCell className="font-medium">{t.id}</TableCell>
                  <TableCell>{t.customer}</TableCell>
                  <TableCell>{t.plan}</TableCell>
                  <TableCell className="text-right">${""}{t.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    {t.status === "Paid" && (
                      <Badge variant="success">Paid</Badge>
                    )}
                    {t.status === "Pending" && (
                      <Badge variant="warning">Pending</Badge>
                    )}
                    {t.status === "Refunded" && (
                      <Badge variant="secondary">Refunded</Badge>
                    )}
                  </TableCell>
                  <TableCell>{new Date(t.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
