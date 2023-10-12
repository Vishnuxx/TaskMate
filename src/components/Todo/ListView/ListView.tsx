import {  useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { ListData } from "./controller";




type Props = {
	data: ListData[];
	itemElement: (data: ListData, index: number) => JSX.Element;
};


function ListView({ data, itemElement }: Props) {
	const [items , setItems] = useState<HTMLElement[]>([]);
	
	
	const dragState = useRef({
		dragStart: false,
		index: 0,
	});


	useEffect(()=>{
		const elems : HTMLElement[] = []
		data.map((item, index) => {
			return (
				<li
					draggable
					key={index}
					data-type="listitem"
					ref={(r) => elems.push(r!)}
					onDrag={(e: DragEvent) => {
						e.stopPropagation();
					}}
					onDragStart={dragStart}
				>
					{itemElement(item, index)}
					<span style={{ width: "50px" }}>
						<DragHandle></DragHandle>
					</span>
				</li>
			);
		});
		setItems(elems)
	}, [])

	const listref = useRef<HTMLUListElement | null>();

	const onElementLoad = (elem: HTMLElement) => {
		items.current.push(elem);
	};

	const getDropIndex = (y: number) => {
		let index = items.current.length - 1;
		items.current.map((item, i) => {
			const bounds = item.getBoundingClientRect();
			//check if y is inside item
			if (item.dataset.type === "listitem") {
				if (y >= bounds.y && y <= bounds.y + bounds.height) {
					if (y >= bounds.y + bounds.height / 2) {
						index = i + 1;
						return;
					}
					index = i;
					return;
				}
			}
		});
		return index;
	};

	useEffect(() => {
		const dragOver = (e: MouseEvent) => {
			if (dragState.current.dragStart) {
				const ind = getDropIndex(e.pageY);
				console.log(Math.min(items.current.length, ind));
			}
		};

		document.addEventListener("dragover", dragOver);
		return () => {
			document.removeEventListener("dragover", dragOver);
		};
	}, []);

	const dragStart = (e : DragEvent) => {
		dragState.current.dragStart = true;
	};

	const drop = (e : DragEvent) => {
		
	};

	const end = (e : DragEvent) => {
		dragState.current.dragStart = false;
	};
	return (
		<div className={styles.container}>
			<ul ref={(r) => (listref.current = r)} onDragEnd={end} onDrop={drop}>
				{data.map((item, index) => {
					return (
						<li
							draggable
							key={index}
							data-type="listitem"
							ref={(r) => onElementLoad(r!)}
							onDrag={(e: DragEvent) => {
								e.stopPropagation();
							}}
							onDragStart={dragStart}
						>
							{itemElement(item, index)}
							<span style={{ width: "50px" }}>
								<DragHandle></DragHandle>
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default ListView;

const DragHandle = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="9" height="21" viewBox="0 0 9 21" fill="none">
			<circle cx="1.5" cy="1.5" r="1.5" fill="#7A7A7A" />
			<circle cx="1.5" cy="10.5" r="1.5" fill="#7A7A7A" />
			<circle cx="1.5" cy="19.5" r="1.5" fill="#7A7A7A" />
			<circle cx="7.5" cy="1.5" r="1.5" fill="#7A7A7A" />
			<circle cx="7.5" cy="10.5" r="1.5" fill="#7A7A7A" />
			<circle cx="7.5" cy="19.5" r="1.5" fill="#7A7A7A" />
		</svg>
	);
};
