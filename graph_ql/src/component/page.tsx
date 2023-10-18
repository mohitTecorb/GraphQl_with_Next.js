'use client'
import axios from "axios";
import { useEffect, useState } from "react";

const HandlerAPI = () => {
	const [data, setData] = useState<any>()

	useEffect(() => {
		handleRequest()
	}, [])
	//**********************By Axios *********************************** */
	const handleRequest = () => {
		const options = {
			method: 'POST',
			url: 'https://countries.trevorblades.com/',
			headers: {
				'content-type': 'application/json'
			},
			data: {
				query: `{
					countries{
						capital,
						currency,
						name
					  }
				}`
			}
		};
		axios.request(options).then(function (response) {
			setData(response.data); // Response
		})
			.catch(function (error) {
				console.error(error);
			});
	}
	// ************************** By fetch *************************************
	// fetch('https://countries.trevorblades.com/', {
	// 	method: 'POST',
	// 	headers: { 'Content-Type': 'application/json' },
	// 	body: JSON.stringify({
	// 		query: `{
	//         countries {
	//             name
	//         }
	//     }`
	// 	})
	// })
	// 	.then(res => res.json())
	// 	.then(res => setData(res.data));

	return (
		<>
			<div className="flex justify-center items-center mt-10">
				<div className="h-[800px] overflow-x-scroll">
					<table >
						<thead className="border border-slate-300">
							<tr className="border border-slate-300 ">
								<td className="border border-slate-300 text-center text-2xl font-bold">Capital</td>
								<td className="border border-slate-300 text-center text-2xl font-bold">Currency</td>
								<td className="border border-slate-300 text-center text-2xl font-bold">Name</td>
							</tr>
						</thead>
						<tbody className="border border-slate-300">
							{data?.data?.countries?.map((item: any, index: number) => {
								return (
									<tr key={index}>
										<td className="border border-slate-300 text-center">{item?.capital}</td>
										<td className="border border-slate-300 text-center">{item?.currency}</td>
										<td className="border border-slate-300 text-center">{item?.name}</td>
									</tr>
								)
							})
							}
						</tbody>
					</table>
				</div>
			</div>

		</>
	)
}
export default HandlerAPI