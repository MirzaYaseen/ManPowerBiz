import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    totalSpent: 590,
    totalBookings: 800,
    totalCompletedBookings: 1400,
  },
  {
    name: "Feb",
    totalSpent: 868,
    totalBookings: 967,
    totalCompletedBookings: 1506,
  },
  {
    name: "Mar",
    totalSpent: 1397,
    totalBookings: 1098,
    totalCompletedBookings: 989,
  },
  {
    name: "Apr",
    totalSpent: 1480,
    totalBookings: 1200,
    totalCompletedBookings: 1228,
  },
];

const CustomerDashboardChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="totalCompletedBookings"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="totalBookings" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="totalSpent" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerDashboardChart;
