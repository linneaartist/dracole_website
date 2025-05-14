import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnimationProvider } from "./contexts/AnimationContext";
import "./styles/fonts.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AnimationProvider>
			<App />
		</AnimationProvider>
	</React.StrictMode>
);
