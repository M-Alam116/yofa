import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", expenses: 0 },
  { name: "Feb", expenses: 0 },
  { name: "Mar", expenses: 0 },
  { name: "Apr", expenses: 0 },
  { name: "May", expenses: 0 },
  { name: "Jun", expenses: 0 },
  { name: "Jul", expenses: 0 },
  { name: "Aug", expenses: 0 },
  { name: "Sep", expenses: 0 },
  { name: "Oct", expenses: 0 },
  { name: "Nov", expenses: 0 },
  { name: "Dec", expenses: 0 },
];

export default function CompletedGraph() {
  const CustomYAxisTick = (props) => {
    const { x, y, payload } = props;
    if (payload.value === 0) {
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end">
            {payload.value}
          </text>
        </g>
      );
    }
    return null;
  };

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart 
     
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis
            domain={[-100, 100]}
            tick={<CustomYAxisTick />}
            interval={0}
            ticks={[0]}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#4ccccc"
            fill="#4ccccc"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
