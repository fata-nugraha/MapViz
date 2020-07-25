import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Example from "./Example";
import MapChart from "./MapChart";
import MapProvinsi from "./MapProvinsi";
import TreeMap from "react-d3-treemap";
import { data } from "./data";
import "react-d3-treemap/dist/react.d3.treemap.css";

function App() {
	const [content, setContent] = useState("");
	return (
		<div className="App">
			<div class="map-indonesia">
				<MapChart setTooltipContent={setContent} />
			</div>
			<hr></hr>
			<MapProvinsi
				location={[107.5, -7]}
				scale={12500}
				maxZoom={1}
				Url="https://raw.githubusercontent.com/ghapsara/indonesia-atlas/master/kabupaten-kota/Jawa%20Barat/jawa-barat-simplified-topo.json"
				setTooltipContent={setContent}
			/>
			<hr></hr>
			<MapProvinsi
				location={[110, -7]}
				scale={12500}
				maxZoom={1}
				Url="https://raw.githubusercontent.com/ghapsara/indonesia-atlas/master/kabupaten-kota/Jawa%20Tengah/jawa-tengah-simplified-topo.json"
				setTooltipContent={setContent}
			/>
			<ReactTooltip>{content}</ReactTooltip>
			<hr></hr>
			<TreeMap
				id="myTreeMap"
				height={500}
				width={800}
				data={data}
				valueUnit={"suara"}
			/>
			<hr></hr>
			<a href="/test.html">Drill down bar (template)</a>
			<hr></hr>
			<a href="https://datastudio.google.com/reporting/acebf1d9-3bcb-488d-ba6c-6f16741949b4">Versi Data Studio</a>
			<hr></hr>
			{/* <Example></Example>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edited7 <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        		</a>
			</header> */}
		</div>
	);
}

export default App;
