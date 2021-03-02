import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Mail from "./mail";

function MailList(props) {
	const [mails, setMails] = useState([]);

	useEffect(() => {
		const asyncFn = async () => {
			const response = await axios.get("http://localhost:5001/mails");
			setMails(response.data);
		};
		asyncFn();
	}, []);

	return (
		<div className="mailList">
			{mails.map((m, index) => (
				<Mail key={index} mail={m} />
			))}
		</div>
	);
}

export default MailList;
