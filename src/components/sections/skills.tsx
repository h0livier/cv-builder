import {Button, Stack} from "@chakra-ui/react";
import EditableList, { EditableListItem } from "../lists/editable-list";
import { getUniqueID } from "@/helpers/unique-id.helper";
import { useStorage } from "@/hooks/useStorage";
import { useState, useEffect } from "react";
import SkillListItem from "../lists/items/skill-list-item";

export interface SkillSectionItem extends EditableListItem{
    skill: string,
}

export default function SkillSection(){

    const [skillItems, setSkillItems] = useStorage('local', 'skillItems', []);

    const [items, setItems] = useState<SkillSectionItem[]>([]);

    useEffect(() => {
        if(skillItems){
            setItems(skillItems)
        }
    }, [])

    const removeItem = (value: string) => setItems(items.filter(item => item.index !== value))
    const addItem = () => {
        const newIndex = getUniqueID((items.length + 1).toString())
        const newItem = {
            skill: '',
            index: newIndex
        }
        setItems([...items, newItem])
    }
    const saveItem = (value: string, item: SkillSectionItem) => {
        const index = items.findIndex(item => item.index === value)
        if (index !== -1) {
            items[index] = item
        }
        setItems(items)
    }
    const saveAllItem = () => {
        setSkillItems(items)
    } 

    return (
        <Stack>
            <EditableList
                customDivider={<div></div>}
                items={items}
                renderChild={(item) =>
                    <SkillListItem
                        deleteItem={removeItem}
                        item={item as SkillSectionItem}
                        saveItem={saveItem}
                        key={item.index}
                    />
                }
            />
            <Stack direction='row'>
                <Button flexGrow={1} onClick={saveAllItem}>Enregistrer les modifications</Button>
                <Button flexGrow={1} onClick={addItem}>Ajouter un élément</Button>
            </Stack>
        </Stack>
    )

}