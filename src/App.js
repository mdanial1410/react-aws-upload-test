import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Welcome!!!!</h1>
			</header>
			<body className="App-body">
				<p>Add a file upload function here?</p>
			</body>
			<footer className="App-footer">
				<AmplifySignOut />
			</footer>
		</div>
	);
}

export default withAuthenticator(App);
