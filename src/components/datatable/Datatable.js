import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import './datatable.scss';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {
	const [data, setData] = useState(userRows);

	const handleDelete = id => {
		setData(data.filter(item => item.id !== id));
	};
	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: params => {
				return (
					<div className="cellAction">
						<Link to="/users/test" style={{ textDecoration: 'none' }}>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="deleteButton"
							onClick={() => handleDelete(params.row.id)}
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
			<div className="datatableTitle">
				Ajouter un nouvel utilisateur
				<Link
					to="/users/new"
					style={{ textDecoration: 'none' }}
					className="link"
				>
					Ajouter
				</Link>
			</div>
			<DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
