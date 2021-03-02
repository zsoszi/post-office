import React from "react";
import { useState } from "react";
import "./App.css";
import "./Components/components.css";
import MailList from "./Components/mailList";
import MailForm from "./Components/mailForm";
import MailSearch from "./Components/mailSearch";

function App() {
	const [content, setContent] = useState(null);

	const feaures = {
		mails: <MailList />,
		newMail: <MailForm />,
		search: <MailSearch />,
	};

	const Click = (e) => {
		setContent(feaures[e.target.name]);
	};
	return (
		<div className="App">
			<header className="header">
				<button onClick={Click} name="mails">
					List mails
				</button>
				<button onClick={Click} name="newMail">
					New mail
				</button>
				<button onClick={Click} name="search">
					Search
				</button>
			</header>
			<div className="content">{content}</div>
		</div>
	);
}

export default App;
