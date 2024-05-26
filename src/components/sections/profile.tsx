import {FormControl, FormLabel, Stack, Textarea} from "@chakra-ui/react";


export default function ProfileSection(){

    return(
        <>
            <Stack spacing={3} direction='row'>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea />
                </FormControl>
            </Stack>
        </>
    )

}