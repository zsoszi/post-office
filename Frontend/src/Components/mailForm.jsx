import React from "react";
import axios from "axios";
import { useState } from "react";

function MailForm(props) {
	const formData = {
		referenceN: useState(""),
		to: useState(""),
		from: useState(""),
		content: useState(""),
	};

	const numbers = "0123456789";

	const onKeyDown = (e) => {
		if (
			!numbers.includes(e.key) &&
			!e.key.includes("Arrow") &&
			e.key !== "Backspace" &&
			e.key !== "Delete"
		)
			e.preventDefault();
	};

	const onChange = (e) => {
		formData[e.target.id][1](e.target.value);
	};

	const onClick = (e) => {
		if (formData.referenceN[0])
			axios.post("http://localhost:5001/mails", {
				referenceNumber: formData.referenceN[0],
				to: formData.to[0],
				from: formData.from[0],
				content: formData.content[0],
			});
	};

	return (
		<div className="mailForm">
			<form>
				<div className="formCont">
					<label htmlFor="referenceN">Reference Number </label>
					<input
						id="referenceN"
						onKeyDown={onKeyDown}
						onChange={onChange}
						value={formData.referenceN[0]}
					/>
				</div>
				<div className="formCont">
					<label htmlFor="to">To </label>
					<input id="to" onChange={onChange} value={formData.to[0]} />
				</div>
				<div className="formCont">
					<label htmlFor="from">From </label>
					<input id="from" onChange={onChange} value={formData.from[0]} />
				</div>
				<div className="formCont">
					<label htmlFor="content">Content </label>
					<textarea
						id="content"
						onChange={onChange}
						value={formData.content[0]}
					/>
				</div>
				<button type="button" onClick={onClick} className="send">
					Send
				</button>
			</form>
		</div>
	);
}

export default MailForm;
