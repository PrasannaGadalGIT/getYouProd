// Importing necessary components from recharts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useState, useEffect } from "react";
export default function LineChartProductDetails() {
  const [productDetails, setProductDetails] = useState([]);

  // Fetch product details from the server
  const fetchProductDetails = async () => {
    const res = await fetch("http://localhost:3002/getProductDetails");
    const data = await res.json();
    setProductDetails(data.productDetails);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <LineChart
      width={700}
      height={650}
      data={productDetails}
      margin={{
        top: 60,
        right: 50,
        left: 20,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="productName" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
     

      {/* Map through productDetails and render a Line for each product */}
      {productDetails.map((product, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey="stock"
          stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color
        />
      ))}
    </LineChart>
  );
}

// CustomTooltip component to customize tooltip content
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className=" text-white font-semibold">
        <p>{`Product: ${label}`}</p>
        <p>{`Stock: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};
