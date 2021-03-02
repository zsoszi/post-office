import React from "react";
import axios from "axios";
import { useState } from "react";
import Mail from "./mail";

function MailSearch(props) {
	const [referenceN, setReferenceN] = useState("");
	const [mail, setMail] = useState(null);

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
		setReferenceN(e.target.value);
	};

	const onClick = (e) => {
		if (referenceN)
			axios.get(`http://localhost:5001/mails/${referenceN}`).then((resp) => {
				setMail(resp.data[0]);
			});
		else setMail(null);
	};

	return (
		<div className="search">
			<form>
				<input
					id="referenceN"
					onChange={onChange}
					value={referenceN}
					onKeyDown={onKeyDown}
				/>
				<button onClick={onClick} type="button" className="searchBtn">
					Search
				</button>
			</form>
			{mail ? <Mail mail={mail} /> : <p>No mails found</p>}
		</div>
	);
}

export default MailSearch;
