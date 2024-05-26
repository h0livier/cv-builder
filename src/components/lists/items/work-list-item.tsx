import {WorkSectionItem} from "@/components/sections/work.tsx";
import FormInput from "@/components/forms/input.tsx";
import {Box, Button, Stack, Text} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";

export interface WorkListItemProps {
    item: WorkSectionItem,
    isActive: boolean,
    changeActive: (value: string) => void,
    deleteItem: (value: string) => void,
}

export default function WorkListItem({item, isActive, changeActive, deleteItem}: WorkListItemProps) {

    return(
        <>
            {isActive ?
                <Box className='testOhay'>
                    <Stack direction='row'>
                        <FormInput label="Localité" name='localite' />
                        <FormInput label="Fonction" name='fonction' />
                    </Stack>
                    <FormInput label="Nom de l'employeur" name='employer' />
                    <Stack direction='row'>
                        <FormInput label="Du" name='from' type='date' />
                        <FormInput label="Au" name='to' type='date' />
                    </Stack>
                    <FormInput label="Description" name='description' />
                    <Box display='flex' justifyContent='flex-end' gap={3}>
                        <Button onClick={() => deleteItem(item.index)}>
                            <DeleteIcon mr='10px' /> Supprimer
                        </Button>
                        <Button onClick={() => changeActive(item.index)}>
                            <EditIcon mr='10px' /> Sauvegarder
                        </Button>
                    </Box>
                </Box> :
                <Stack direction='row'>
                    <Box flexGrow={1}>
                        <Text fontSize='lg' fontWeight='500'>{item.employer}</Text>
                        <Text>De septembre 2024 à juillet 2024</Text>
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
