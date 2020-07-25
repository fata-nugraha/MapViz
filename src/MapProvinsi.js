import React, { memo } from "react";
import {
	ZoomableGroup,
	ComposableMap,
	Geographies,
	Geography
} from "react-simple-maps";

// const geoUrl = "https://raw.githubusercontent.com/ghapsara/indonesia-atlas/master/kabupaten-kota/Jawa%20Barat/jawa-barat-simplified-topo.json";

const MapProvinsi = ({ location, scale, maxZoom, Url, setTooltipContent }) => {
	const geoUrl = Url
	return (
		<>
			<ComposableMap data-tip="" projectionConfig={{ scale: scale }}>
				<ZoomableGroup center={location} maxZoom={maxZoom}>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map(geo => (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									onMouseEnter={() => {
										const NAME = geo.properties.kabkot;
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

export default memo(MapProvinsi);
