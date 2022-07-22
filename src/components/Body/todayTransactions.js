import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { useTable, usePagination } from 'react-table';
import './transactions.css';


export function TodayTransact() {
    const [products, setProducts] = useState([]);

    //  fetch the data using axios(an http client library) 
	async function fetchProducts() {
	    const response = await axios
	      	.get("https://fakestoreapi.com/products")
	      	.catch((err) => console.log(err));

	    if (response) {
	      	const products = response.data;

	      	console.log("Products: ", products);
	      	setProducts(products);
	    }
	};

	//  useEffect is used to check if a component is done mounting or updating and if so then do something
	useEffect(() => {
	  	const fetchPdts = fetchProducts();
	 	},
	  	[]
	)

	// always use memoization (a simple form of cache)
	const productsData = useMemo(() => [...products], [products])

    const productColumns = useMemo(() => products[0] ? Object.keys(products[0]).filter((key) => key !== 'rating').map((key) => {return {Header: key, accessor:key}}) : [], [products])

    const tableInstance = useTable({ columns: productColumns, data: productsData, manualPagination: true, }, usePagination)
	
	const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, pageCount, page, state:{ pageIndex, pageSize },} = tableInstance

	return (
		<>		
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map((column) => (
						<th {...column.getHeaderProps()}>
							{column.render("Header")}
						</th>
						))}					
					</tr>
					))}			
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, idx) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell, idx) => (
								<td {...cell.getCellProps()}>
									{cell.render("Cell")}
								</td>
								))}						
						</tr>
					);
				})}			
			</tbody>
		</table>
		</>
		);

}


export default TodayTransact;

