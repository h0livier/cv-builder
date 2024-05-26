import {FormControl, FormLabel, Input, Stack, Textarea} from "@chakra-ui/react";

export default function SchoolSection(){

    return (
        <Stack spacing={2}>
            <Stack spacing={3} direction='row'>
                <FormControl>
                    <FormLabel>Formation</FormLabel>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormLabel>Emplacement</FormLabel>
                    <Input />
                </FormControl>
            </Stack>
            <FormControl>
                <FormLabel>Nom de l'école</FormLabel>
                <Input />
            </FormControl>
            <Stack spacing={3} direction='row'>
                <FormControl>
                    <FormLabel>De</FormLabel>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormLabel>a</FormLabel>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormLabel>A</FormLabel>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormLabel>a</FormLabel>
                    <Input />
                </FormControl>
            </Stack>
            <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea></Textarea>
            </FormControl>
        </Stack>
    )
}