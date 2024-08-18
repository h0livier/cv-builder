import FormInput from "@/components/forms/input.tsx";
import {Box, Button} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import { useState } from "react";
import { SkillSectionItem } from "@/components/sections/skills";

export interface SkillListItemProps {
    item: SkillSectionItem,
    deleteItem: (value: string) => void,
    saveItem: (value:string, skill: SkillSectionItem) => void
}

export default function SchoolListItem({item, deleteItem, saveItem}: SkillListItemProps) {

    const [updatedItem, setUpdatedItem] = useState<SkillSectionItem>(item)

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUpdatedItem(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
        saveItem(item.index, {index: item.index, value: value})
    }

    return(
        <>
            <Box display='flex' alignItems='flex-end'>
                <FormInput label="Nom" name='value' value={updatedItem.value} updateValue={handleInputChange} />
                <Box display='flex' gap={3} justifyContent='flex-end'>
                    <Button ml='10px' mb="8px" onClick={() => deleteItem(item.index)}>
                        <DeleteIcon />
                    </Button>
                </Box>
            </Box>
        </>
    )

}
