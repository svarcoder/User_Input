import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Context from "../Context/Context";

const Home = () => {
	const history = useHistory();
	const { setCustomer } = useContext(Context);

	const [errors, setErrors] = useState({
		workingDaysError: false,
		workingHoursError: false,
		subjectsError: false,
		subjectDayError: false,
	});

	const [data, setData] = useState({
		workingDays: 1,
		workingHours: 0,
		subjects: 0,
		subjectDay: 0,
	});

	const handelChange = (e) => {
		setData({
			...data,
			[e.target.id]: parseInt(e.target.value, 10),
		});
	};

	const HandleValidation = (e) => {
		e.preventDefault();
		setErrors((prevError) => {
			return {
				...prevError,
				workingDaysError: false,
				workingHoursError: false,
				subjectsError: false,
				subjectDayError: false,
			};
		});
		// console.log("DDDDDDDDDD", data);
		// console.log('DSSS' , e);
		if (data?.workingDays < 1 || data?.workingDays > 8) {
			// console.log("TYYYY", data);
			setErrors((prevError) => {
				return {
					...prevError,
					workingDaysError: true,
					workingHoursError: false,
					subjectsError: false,
					subjectDayError: false,
				};
			});

			if (data.workingHours > 10 || data.workingHours < 0) {
				setErrors((prevError) => {
					return {
						...prevError,
						workingHoursError: true,
					};
				});
			}
			if (data.subjects < 0) {
				setErrors((prevError) => {
					return {
						...prevError,
						subjectsError: true,
					};
				});
			}
			if (data.subjectDay < 0) {
				setErrors((prevError) => {
					return {
						...prevError,
						subjectDayError: true,
					};
				});
			}
		} else if (data.workingHours > 10 || data.workingHours < 0) {
			setErrors((prevError) => {
				return {
					...prevError,
					workingDaysError: false,
					workingHoursError: true,
					subjectsError: false,
					subjectDayError: false,
				};
			});

			if (data.subjects < 0) {
				setErrors((prevError) => {
					return {
						...prevError,
						subjectsError: true,
					};
				});
			}
			if (data.subjectDay < 0) {
				setErrors((prevError) => {
					return {
						...prevError,
						subjectDayError: true,
					};
				});
			}
		} else if (data.subjects < 0) {
			setErrors((prevError) => {
				return {
					...prevError,
					workingDaysError: false,
					workingHoursError: false,
					subjectsError: true,
					subjectDayError: false,
				};
			});

			if (data.subjectDay < 0) {
				setErrors((prevError) => {
					return {
						...prevError,
						subjectDayError: true,
					};
				});
			}
		} else if (data.subjectDay < 0) {
			setErrors((prevError) => {
				return {
					...prevError,
					workingDaysError: false,
					workingHoursError: false,
					subjectsError: false,
					subjectDayError: true,
				};
			});
		} else {
			onSubmit(e);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setCustomer(data);
		history.push(`/show`);
	};

	return (
		<>
			<div className='p-4'>
				<h1>ADD DETAILS</h1>
				<div className='card p-4'>
					<div className='card-body'>
						<div className='input-group mb-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text'
									id='inputGroup-sizing-default'>
									No of Working days
								</span>
							</div>
							<input
								type='number'
								className='form-control'
								style={
									errors?.workingDaysError === true
										? { border: "1px solid red" }
										: {}
								}
								aria-label='Sizing example input'
								aria-describedby='inputGroup-sizing-default'
								id='workingDays'
								value={data.workingDays}
								onChange={handelChange}
							/>
						</div>
						<div className='input-group mb-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text'
									id='inputGroup-sizing-default'>
									No of working hours per day
								</span>
							</div>
							<input
								type='number'
								className='form-control'
								aria-label='Sizing example input'
								aria-describedby='inputGroup-sizing-default'
								style={
									errors?.workingHoursError === true
										? { border: "1px solid red" }
										: {}
								}
								id='workingHours'
								value={data.workingHours}
								onChange={handelChange}
							/>
						</div>
						<div className='input-group mb-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text'
									id='inputGroup-sizing-default'>
									Total Subjects
								</span>
							</div>
							<input
								type='number'
								className='form-control'
								aria-label='Sizing example input'
								aria-describedby='inputGroup-sizing-default'
								style={
									errors?.subjectsError === true
										? { border: "1px solid red" }
										: {}
								}
								id='subjects'
								value={data.subjects}
								onChange={handelChange}
							/>
						</div>
						<div className='input-group mb-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text'
									id='inputGroup-sizing-default'>
									No of subjects per day
								</span>
							</div>
							<input
								type='number'
								className='form-control'
								aria-label='Sizing example input'
								aria-describedby='inputGroup-sizing-default'
								style={
									errors?.subjectDayError === true
										? { border: "1px solid red" }
										: {}
								}
								id='subjectDay'
								value={data.subjectDay}
								onChange={handelChange}
							/>
						</div>
						<div style={{ display: "flex", justifyContent: "flex-start" }}>
							<button
								type='button'
								className='btn btn-outline-info'
								onClick={HandleValidation}>
								NEXT
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
