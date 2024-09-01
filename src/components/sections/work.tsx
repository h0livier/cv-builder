import EditableList, {EditableListItem} from "@/components/lists/editable-list.tsx";
import WorkListItem from "@/components/lists/items/work-list-item.tsx";
import {useEffect, useState} from "react";
import { Button, Stack} from "@chakra-ui/react";
import {getUniqueID} from "@/helpers/unique-id.helper.ts";
import { useStorage } from "@/hooks/useStorage";

export interface WorkSectionItem extends EditableListItem{
    functionName: string,
    where: string,
    employer: string,
    from: string,
    to: string,
    description: string,
}

export default function WorkSection(){

    const [workItems, setWorkItems] = useStorage('local', 'workItems', []);

    const [items, setItems] = useState<WorkSectionItem[]>([]);

    useEffect(() => {
        if(workItems){
            setItems(workItems)
        }
    }, [])

    const [activeItem, setActiveItem] = useState(items[0]?.index);
    const removeItem = (value: string) => setItems(items.filter(item => item.index !== value))
    const addItem = () => {
        const newIndex = getUniqueID((items.length + 1).toString())
        const newItem = {
            functionName: '',
            to: '',
            from: '',
            where: '',
            employer: '',
            description: '',
            index: newIndex
        }
        setItems([...items, newItem])
        setActiveItem(newIndex)
    }
    const saveItem = (value: string, item: WorkSectionItem) => {
        const index = items.findIndex(item => item.index === value)
        if (index !== -1) {
            items[index] = item
            console.log(item)
            console.log("found")
        }
        console.log(items)
        setItems(items)
    }
    const saveAllItem = () => {
        setWorkItems(items)
    } 

    return (
        <Stack>
            <EditableList
                items={items}
                renderChild={(item) =>
                    <WorkListItem
                        deleteItem={removeItem}
                        changeActive={setActiveItem}
                        isActive={item.index === activeItem}
                        item={item as WorkSectionItem}
                        key={item.index}
                        saveItem={saveItem}
                    />
                }
            />
            <Stack direction={{base: 'column', md:'row'}}>
                <Button flexGrow={1} onClick={saveAllItem}>Enregistrer les modifications</Button>
                <Button flexGrow={1} onClick={addItem}>Ajouter un élément</Button>
            </Stack>
        </Stack>
    )


}