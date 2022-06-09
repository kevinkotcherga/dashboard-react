import React from 'react';
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widget = ({ type }) => {
	let data;

	//temporary
	const amount = 100;
	const diff = 20;

	switch (type) {
		case 'user':
			data = {
				title: 'UTILISATEURS',
				isMoney: false,
				link: 'Voir tous les utilisateurs',
				icon: (
					<PersonOutlineOutlinedIcon
						className="icon"
						style={{
							color: 'crimson',
							backgroundColor: 'rgba(255, 0, 0, 0.2)',
						}}
					/>
				),
			};
			break;
		case 'order':
			data = {
				title: 'Commandes',
				isMoney: false,
				link: 'Voir toutes les commandes',
				icon: (
					<ShoppingCartCheckoutOutlinedIcon
						className="icon"
						style={{
							color: 'goldenrod',
							backgroundColor: 'rgba(218, 165, 32, 0.2)',
						}}
					/>
				),
			};
			break;
		case 'earning':
			data = {
				title: 'Gains',
				isMoney: true,
				link: 'Voir le revenu net',
				icon: (
					<MonetizationOnOutlinedIcon
						className="icon"
						style={{
							color: 'green',
							backgroundColor: 'rgba(0, 128, 0, 0.2)',
						}}
					/>
				),
			};
			break;
		case 'balance':
			data = {
				title: 'SOLDE',
				isMoney: true,
				link: 'Voir les détails',
				icon: (
					<AccountBalanceOutlinedIcon
						className="icon"
						style={{
							color: 'purple',
							backgroundColor: 'rgba(128, 0, 128, 0.2)',
						}}
					/>
				),
			};
			break;
		default:
			break;
	}
	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">
					{amount}
					{data.isMoney && '€'}
				</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUpOutlinedIcon />
					{diff} %
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
