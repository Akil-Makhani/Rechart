import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "Inactive", value: 7 },
  { name: "Active", value: 2 },
  { name: "Inactive", value: 7 },
  { name: "Active", value: 6 },
  { name: "Inactive", value: 3 },
];

const COLORS = ["#CCCCCC", "#8884d8"];

const ClockComponent = () => {
  const innerRadius = 60;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h2>Flow Peaks</h2>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            startAngle={90}
            endAngle={-270}
            innerRadius={innerRadius}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {Array.from(Array(12), (_, index) => {
            const hour = (index * 2) % 24;
            const angle = (index * 30 - 90) * (Math.PI / 180);
            const radius = innerRadius + 30;
            const x = 205 + radius * Math.cos(angle);
            const y = 210 + radius * Math.sin(angle);
            return (
              <text
                x={x}
                y={y}
                textAnchor="middle"
                key={index}
                style={{ fontSize: "12px" }}
              >
                {hour === 0 ? 24 : hour}
              </text>
            );
          })}
          <text x="200" y="90" textAnchor="middle" style={{ fontSize: 16 }}>
            Night
          </text>
          <text x="80" y="210" textAnchor="middle" style={{ fontSize: 16 }}>
            Evening
          </text>
          <text x="200" y="330" textAnchor="middle" style={{ fontSize: 16 }}>
            Afternoon
          </text>
          <text x="330" y="210" textAnchor="middle" style={{ fontSize: 16 }}>
            Morning
          </text>
          <line
            x1="120"
            y1="120"
            x2="280"
            y2="280"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
          <line
            x1="120"
            y1="280"
            x2="280"
            y2="120"
            style={{ stroke: "black", strokeWidth: 2 }}
          />
        </PieChart>
      </div>
      <button
        style={{
          fontSize: "16px",
          width: "100px",
          height: "40px",
        }}
      >
        April
      </button>
    </div>
  );
};

export default ClockComponent;
