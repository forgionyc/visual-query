import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DataItem {
  country_name: string;
  value: number;
  year: number;
}

interface LineChartProps {
  data: DataItem[];
}

const LineChartComponent: React.FC<LineChartProps> = ({ data }) => {
  const formattedData = data.reduce<{ year: number; [key: string]: number }[]>(
    (acc: { year: number; [key: string]: number }[], item: DataItem) => {
      let existingYear = acc.find((entry) => entry.year === item.year);

      if (existingYear) {
        existingYear[item.country_name] = item.value;
      } else {
        acc.push({
          year: item.year,
          [item.country_name]: item.value,
        });
      }

      return acc;
    },
    []
  );
  return (
    <LineChart
      width={500}
      height={350}
      data={formattedData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis scale="log" domain={["auto", "auto"]} />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Colombia"
        stroke="#FFD93D"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="Brazil"
        stroke="#6BCB77"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="Germany"
        stroke="#FF6B6B"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="United States"
        stroke="#4D96FF"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
export default LineChartComponent;
