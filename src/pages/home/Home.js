import React from 'react';
import Chart from '../../components/chart/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import './home.scss';
import Table from '../../components/table/Table';

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type="user" />
					<Widget type="order" />
					<Widget type="earning" />
					<Widget type="balance" />
				</div>
				<div className="charts">
					<Featured />
					<Chart title="6 derniers mois (revenu)" aspect={2 / 1} />
				</div>
				<div className="listContainer">
					<div className="listTitle">Dernières transactions</div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Home;
