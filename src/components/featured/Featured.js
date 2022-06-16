import { KeyboardArrowDown, MoreVert } from '@mui/icons-material';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss';

const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">Revenu total</h1>
				<MoreVert fontSize="small" />
			</div>
			<div className="bottom">
				<div className="featuredChart">
					<CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
				</div>
				<p className="title">Total des ventes réalisées aujourd'hui</p>
				<p className="amount">4550€</p>
				<p className="desc">
					Traitement des transactions précédentes. Les derniers paiements
					peuvent ne pas être inclus
				</p>
				<div className="summary">
					<div className="item">
						<div className="itemTitle">Cible</div>
						<div className="itemResult negative">
							<KeyboardArrowDown fontSize="small" />
							<div className="resultAmount">12.4k€</div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">La semaine dernière</div>
						<div className="itemResult positive">
							<KeyboardArrowDown fontSize="small" />
							<div className="resultAmount">12.4k€</div>
						</div>
					</div>
					<div className="item">
						<div className="itemTitle">Le mois dernier</div>
						<div className="itemResult positive">
							<KeyboardArrowDown fontSize="small" />
							<div className="resultAmount">12.4k€</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
