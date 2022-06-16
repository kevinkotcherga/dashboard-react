import { MoreVert } from '@mui/icons-material';
import React from 'react';
import './featured.scss';

const Featured = () => {
	return (
		<div className="featured">
			<div className="top">
				<h1 className="title">Total Revenue</h1>
				<MoreVert fontSize="small" />
			</div>
			<div className="bottom"></div>
		</div>
	);
};

export default Featured;
