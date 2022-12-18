import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Context from "../Context/Context";

const Show = () => {
	const { customer } = useContext(Context);

	const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
	useEffect(() => {
		let arr = [];
		for (let i = 0; i < customer?.subjects; i++) {
			arr.push({ firstName: "", lastName: "" });
		}
		setInputList(arr);
	}, [customer]);

	if (customer == null) {
		return <Redirect to='/' />;
	}

	return (
		<>
			<h2>ADD SUBJECTS & HOURS</h2>
			<div className='p-4'>
				{inputList.map((x, i) => {
					return (
						<div className='row'>
							<div className='col-md-6'>
								<div className='card mb-4'>
									<div className='card-body'>
										<label for='exampleInputEmail1'>SUBJECTS</label>
										<input
											type='text'
											className='form-control'
											id='exampleInputEmail1'
											aria-describedby='emailHelp'
											value={x.firstName}
										/>
									</div>
								</div>
							</div>

							<div className='col-md-6'>
								<div className='card mb-4'>
									<div className='card-body'>
										<label for='exampleInputEmail1'>TOTAL HOURS</label>
										<input
											type='text'
											className='form-control'
											id='exampleInputEmail12'
											aria-describedby='emailHelp'
											value={x.lastName}
										/>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}>
				<button type='button' className='btn btn-outline-info'>
					SUBMIT
				</button>
			</div>
		</>
	);
};

export default Show;
