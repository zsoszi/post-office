import React from "react";

function Mail(props) {
	return (
		<div className="mail">
			<p>
				<span>reference number:</span>
				{props.mail.referenceNumber}
			</p>
			<p>
				<span>to:</span>
				{props.mail.to}
			</p>
			<p>
				<span>from:</span>
				{props.mail.from}
			</p>
			<p>
				<span>contnet:</span>
				{props.mail.content}
			</p>
		</div>
	);
}

export default Mail;
