import { useEffect, useState } from "react";

export enum STATUS {
	pending,
	completed,
}

export type ListData = {
	title: string;
	status: STATUS.pending;
};

export function useListItems(data : ListData[]) {
    const [items, setitems] = useState<JSX.Element[]>([])
    const [elements, setelement] = useState<HTMLElement[]>([])

    useEffect(()=>{
        setItems(list)
    },[])

    const setItems = (items : JSX.Element[]) =>{
        setitems(items)
    }

    return {items , elements , setItems}
}