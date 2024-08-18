import {WorkSectionItem} from "@/components/sections/work.tsx";
import FormInput from "@/components/forms/input.tsx";
import {Box, Button, Stack, Text} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import { useState } from "react";
import { SchoolSectionItem } from "@/components/sections/school";

export interface SchoolListItemProps {
    item: SchoolSectionItem,
    isActive: boolean,
    changeActive: (value: string) => void,
    deleteItem: (value: string) => void,
    saveItem: (value: string, item: SchoolSectionItem) => void
}

export default function SchoolListItem({item, isActive, changeActive, deleteItem, saveItem}: SchoolListItemProps) {

    const [updatedItem, setUpdatedItem] = useState<SchoolSectionItem>(item)

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setUpdatedItem(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
    }

    return(
        <>
            {isActive ?
                <Box>
                    <FormInput label="Nom de l'école" name='schoolName' value={updatedItem.schoolName} updateValue={handleInputChange} />
                    <Stack direction='row'>
                        <FormInput label="Localité" name='where' value={updatedItem.where} updateValue={handleInputChange} />
                        <FormInput label="Formation" name='formation' value={updatedItem.formation} updateValue={handleInputChange} />
                    </Stack>
                    <Stack direction='row'>
                        <FormInput label="Du" name='from' type='date' value={updatedItem.from} updateValue={handleInputChange} />
                        <FormInput label="Au" name='to' type='date' value={updatedItem.to} updateValue={handleInputChange} />
                    </Stack>
                    <FormInput label="Description" name='description' value={updatedItem.description} updateValue={handleInputChange} />
                    <Box display='flex' justifyContent='flex-end' gap={3}>
                        <Button onClick={() => deleteItem(item.index)}>
                            <DeleteIcon mr='10px' /> Supprimer
                        </Button>
                        <Button onClick={() => saveItem(item.index, updatedItem)}>
                            <EditIcon mr='10px' /> Enregistrer
                        </Button>
                    </Box>
                </Box> :
                <Stack direction='row'>
                    <Box flexGrow={1}>
                        <Text fontSize='lg' fontWeight='500'>{item.schoolName}</Text>
                        <Text>Du {item.from} au {item.to}</Text>
                    </Box>
                    <Stack gap={5} alignItems='center' direction='row'>
                        <DeleteIcon onClick={() => deleteItem(item.index)} />
                        <EditIcon onClick={() => changeActive(item.index)} />
                    </Stack>
                </Stack>
            }
        </>
    )

}
