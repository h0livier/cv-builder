import FormInput from "@/components/forms/input.tsx";
import {Box, Button, Stack} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { LanguagesSectionItem } from "@/components/sections/languages";

export interface LanguagesListItemProps {
    item: LanguagesSectionItem,
    deleteItem: (value: string) => void,
    saveItem: (value:string, skill: LanguagesSectionItem) => void
}

export default function LanguagesListItem({item, deleteItem, saveItem}: LanguagesListItemProps) {

    const [updatedItem, setUpdatedItem] = useState<LanguagesSectionItem>(item)

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUpdatedItem(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
    }

    useEffect(() => {
        saveItem(updatedItem.index, updatedItem)
    }, [updatedItem])

    return(
        <>
            <Box>
                <Stack direction='row'>
                    <FormInput label="Langue" name='language' value={updatedItem.language} updateValue={handleInputChange} />
                    <FormInput label="Niveau" name='level' value={updatedItem.level} updateValue={handleInputChange} />
                </Stack>
                <Box display='flex' justifyContent='flex-end' gap={3}>
                    <Button onClick={() => deleteItem(item.index)}>
                        <DeleteIcon mr='10px' /> Supprimer
                    </Button>
                </Box>
            </Box>
        </>
    )

}
