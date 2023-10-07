
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/index.css"
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<RecoilRoot>
			<App />
		</RecoilRoot>
	</BrowserRouter>
);