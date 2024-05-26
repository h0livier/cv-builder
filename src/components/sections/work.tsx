import EditableList, {EditableListItem} from "@/components/lists/editable-list.tsx";
import WorkListItem from "@/components/lists/items/work-list-item.tsx";
import {useState} from "react";
import { Button, Stack} from "@chakra-ui/react";
import {getUniqueID} from "@/helpers/unique-id.helper.ts";

export interface WorkSectionItem extends EditableListItem{
    functionName: string,
    where: string,
    employer: string,
    from: string,
    to: string,
    description: string,
}

export default function WorkSection(){

    const [items, setItems] = useState<WorkSectionItem[]>([
        {functionName: 'aa', to: '', from: '', where: '', employer: 'eeee', description:'', index: '1' },
        {functionName: 'bbb', to: '', from: '', where: '', employer: 'ddd', description:'', index: '2'},
        {functionName: 'bbb', to: '', from: '', where: '', employer: 'aaaa', description:'', index: '3'},
    ]);

    const [activeItem, setActiveItem] = useState('1');
    const removeItem = (value: string) => setItems(items.filter(item => item.index !== value))
    const addItem = () => {
        const newItem = {
            functionName: '',
            to: '',
            from: '',
            where: '',
            employer: '',
            description: '',
            index: getUniqueID((items.length + 1).toString())
        }
        setItems([...items, newItem])
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
                    />
                }
            />
            <Button onClick={addItem}>Ajouter un élément</Button>
        </Stack>
    )


}