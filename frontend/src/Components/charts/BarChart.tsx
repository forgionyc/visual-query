import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
} from "recharts";
interface DataItem {
  country_name: string;
  value: number;
  year: number;
}

interface BarChartProps {
  data: DataItem[];
}

const BarChartComponent: React.FC<BarChartProps> = ({ data }) => {
  const formattedData = data.reduce<
    { country_name: string; [key: number]: number }[]
  >(
    (
      acc: { country_name: string; [key: number]: number }[],
      item: DataItem
    ) => {
      const existingCountry = acc.find(
        (country) => country.country_name === item.country_name
      );

      if (existingCountry) {
        existingCountry[item.year] = item.value;
      } else {
        acc.push({
          country_name: item.country_name,
          [item.year]: item.value,
        });
      }

      return acc;
    },
    []
  );

  return (
    <BarChart
      width={1280}
      height={350}
      data={formattedData}
      margin={{
        top: 2,
        right: 10,
        left: 20,
        bottom: 10,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="country_name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="2009"
        fill="#AA77FF"
        activeBar={<Rectangle stroke="#CDF5FD" />}
      />
      <Bar
        dataKey="2010"
        fill="#C9EEFF"
        activeBar={<Rectangle stroke="#C9EEFF" />}
      />
      <Bar
        dataKey="2011"
        fill="#97DEFF"
        activeBar={<Rectangle stroke="#62CDFF" />}
      />
      <Bar
        dataKey="2012"
        fill="#62CDFF"
        activeBar={<Rectangle stroke="#C9EEFF" />}
      />
      <Bar
        dataKey="2013"
        fill="#CDF5FD"
        activeBar={<Rectangle stroke="#AA77FF" />}
      />
    </BarChart>
  );
};

export default BarChartComponent;
