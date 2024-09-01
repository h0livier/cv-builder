import {Button, Stack} from "@chakra-ui/react";
import EditableList, { EditableListItem } from "../lists/editable-list";
import { getUniqueID } from "@/helpers/unique-id.helper";
import { useStorage } from "@/hooks/useStorage";
import { useState, useEffect } from "react";
import LanguagesListItem from "../lists/items/languages-list-item";

export interface LanguagesSectionItem extends EditableListItem{
    language: string,
    level: string,
}

export default function Languagesection(){

    const [skillItems, setSkillItems] = useStorage('local', 'languagesItems', []);

    const [items, setItems] = useState<LanguagesSectionItem[]>([]);

    useEffect(() => {
        if(skillItems){
            setItems(skillItems)
        }
    }, [])

    const removeItem = (value: string) => setItems(items.filter(item => item.index !== value))
    const addItem = () => {
        const newIndex = getUniqueID((items.length + 1).toString())
        const newItem = {
            language: '',
            level: '',
            index: newIndex
        }
        setItems([...items, newItem])
    }
    const saveItem = (value: string, item: LanguagesSectionItem) => {
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
                    <LanguagesListItem
                        deleteItem={removeItem}
                        item={item as LanguagesSectionItem}
                        saveItem={saveItem}
                        key={item.index}
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