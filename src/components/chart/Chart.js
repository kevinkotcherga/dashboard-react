import React from 'react';
import './chart.scss';
import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ name: 'Janvier', Total: 10200 },
	{ name: 'Fevrier', Total: 20100 },
	{ name: 'Mars', Total: 8000 },
	{ name: 'Avril', Total: 15600 },
	{ name: 'Mai', Total: 9000 },
	{ name: 'Juin', Total: 17700 },
];

const Chart = () => {
	return (
		<div className="chart">
			<div className="title">Revenu des 6 derniers mois</div>
			<ResponsiveContainer width="100%" aspect={3}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="gray" />
					<CartesianGrid strokeDasharray="3 3" className="chartGrid" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Total"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#total)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
