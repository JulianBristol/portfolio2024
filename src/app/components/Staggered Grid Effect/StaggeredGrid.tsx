import React, { FC, useEffect } from "react";
import "./StaggeredGrid.scss";
import anime from "animejs";

interface StaggeredGridProps {}

const StaggeredGrid: FC<StaggeredGridProps> = ({}) => {
	useEffect(() => {
		const grid = document.getElementById("staggeredGridContainer");

		let columns = 0,
			rows = 0;

		/* I made an error here.
			I'm not really sure what happened but the effect it creates is pretty cool.
			I am keeping it */
		const colors = [
			"#ED9212ff",
			"#ffffff32",
			"#FBF7EDff",
			"#246036ff",
			"#AA0606",
			"#ffffff32",
		];

		let count = -1;

		const handleTileClick = (index: number) => {
			count = count + 1;

			anime({
				targets: ".tile",
				background: colors[count % (colors.length - 1)],
				delay: anime.stagger(50, {
					grid: [columns, rows],
					from: index,
				}),
			});
		};

		if (grid) {
			columns = Math.floor(grid.offsetWidth / 50);
			rows = Math.floor(grid.offsetHeight / 50);

			grid.style.setProperty("--columns", `${columns}`);
			grid.style.setProperty("--rows", `${rows}`);

			const createTile = (index: number) => {
				const tile = document.createElement("div");
				tile.classList.add("tile");
				tile.onclick = (e: MouseEvent) => handleTileClick(index);
				return tile;
			};

			const createTiles = (quantity: number) => {
				Array.from(Array(quantity)).map((tile, index) => {
					grid.appendChild(createTile(index));
				});
			};

			createTiles(columns * rows);

			const createGrid = () => {
				grid.innerHTML = "";

				columns = Math.floor(grid.offsetWidth / 50);
				rows = Math.floor(grid.offsetHeight / 50);
				grid.style.setProperty("--columns", `${columns}`);
				grid.style.setProperty("--rows", `${rows}`);

				createTiles(columns * rows);
			};

			window.onresize = () => {
				createGrid();
			};
		}
	}, []);

	return <div id="staggeredGridContainer" className="flex" />;
};

export default StaggeredGrid;
