import "./App.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import CardComponent from "./CardComponent/CardComponent"

function App() {
	return (
		<>
			<CardComponent />
		</>
	)
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
)
