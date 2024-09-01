import {Button, Stack} from "@chakra-ui/react";
import EditableList, { EditableListItem } from "../lists/editable-list";
import { getUniqueID } from "@/helpers/unique-id.helper";
import { useStorage } from "@/hooks/useStorage";
import { useState, useEffect } from "react";
import SchoolListItem from "../lists/items/school-list-item";

export interface SchoolSectionItem extends EditableListItem{
    formation: string,
    where: string,
    schoolName: string,
    from: string,
    to: string,
    description: string,
}

export default function SchoolSection(){

    const [schoolItems, setSchoolItems] = useStorage('local', 'schoolItems', []);

    const [items, setItems] = useState<SchoolSectionItem[]>([]);

    useEffect(() => {
        if(schoolItems){
            setItems(schoolItems)
        }
    }, [])

    const [activeItem, setActiveItem] = useState(items[0]?.index);
    const removeItem = (value: string) => setItems(items.filter(item => item.index !== value))
    const addItem = () => {
        const newIndex = getUniqueID((items.length + 1).toString())
        const newItem = {
            formation: '',
            to: '',
            from: '',
            where: '',
            schoolName: '',
            description: '',
            index: newIndex
        }
        setItems([...items, newItem])
        setActiveItem(newIndex)
    }
    const saveItem = (value: string, item: SchoolSectionItem) => {
        const index = items.findIndex(item => item.index === value)
        if (index !== -1) {
            items[index] = item
        }
        console.log(items)
        setItems(items)
    }
    const saveAllItem = () => {
        setSchoolItems(items)
    } 

    return (
        <Stack>
            <EditableList
                items={items}
                renderChild={(item) =>
                    <SchoolListItem
                        deleteItem={removeItem}
                        changeActive={setActiveItem}
                        isActive={item.index === activeItem}
                        item={item as SchoolSectionItem}
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