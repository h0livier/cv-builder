import {
    Card,
    CardBody,
    CardHeader,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Stack
} from "@chakra-ui/react";

export default function DataPages(){

    return (
        <Card minW='100%' px={5}>
            <CardHeader borderBottom='1px'>
                <Heading size='lg'>Mes données</Heading>
            </CardHeader>
            <CardBody>
                <Stack spacing={3} direction='row'>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </Stack>
            </CardBody>
        </Card>
    )

}