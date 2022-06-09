import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">Admin.</span>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">PRINCIPALE</p>
					<li>
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>
					<p className="title">LISTES</p>
					<li>
						<PersonOutlineIcon className="icon" />
						<span>Utilisateurs</span>
					</li>
					<li>
						<ShoppingCartCheckoutOutlinedIcon className="icon" />
						<span>Produits</span>
					</li>
					<li>
						<BorderColorOutlinedIcon className="icon" />
						<span>Commandes</span>
					</li>
					<li>
						<LocalShippingOutlinedIcon className="icon" />
						<span>Livraisons</span>
					</li>
					<p className="title">UTILE</p>
					<li>
						<QueryStatsOutlinedIcon className="icon" />
						<span>Statistiques</span>
					</li>
					<li>
						<NotificationsOutlinedIcon className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICES</p>
					<li>
						<SettingsSystemDaydreamOutlinedIcon className="icon" />
						<span>Santé Du Système</span>
					</li>
					<li>
						<PsychologyOutlinedIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsOutlinedIcon className="icon" />
						<span>Paramètres</span>
					</li>
					<p className="title">UTILISATEUR</p>
					<li>
						<AccountCircleOutlinedIcon className="icon" />
						<span>Profil</span>
					</li>
					<li>
						<LogoutOutlinedIcon className="icon" />
						<span>Déconnexion</span>
					</li>
				</ul>
			</div>
			<div className="bottom">color options</div>
		</div>
	);
};

export default Sidebar;
