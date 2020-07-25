import React, { memo } from "react";
import {
	ZoomableGroup,
	ComposableMap,
	Geographies,
	Geography
} from "react-simple-maps";

const geoUrl =
	"https://raw.githubusercontent.com/ghapsara/indonesia-atlas/master/provinsi/provinces-simplified-topo.json";

const MapChart = ({ setTooltipContent }) => {
	return (
		<>
			<ComposableMap data-tip="" projectionConfig={{ scale: 1000 }}>
				<ZoomableGroup center={[119, -1]} maxZoom={1} height={200}>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map(geo => (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									onMouseEnter={() => {
										const NAME = geo.properties.provinsi;
										setTooltipContent(`${NAME}`);
									}}
									onMouseLeave={() => {
										setTooltipContent("");
									}}
									style={{
										default: {
											fill: "#D6D6DA",
											stroke: "#000000",
											outline: "none"
										},
										hover: {
											fill: "#F53",
											stroke: "#000000",
											outline: "none"
										},
										pressed: {
											fill: "#E42",
											outline: "none"
										}
									}}
								/>
							))
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
		</>
	);
};

export default memo(MapChart);
