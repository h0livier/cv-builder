import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Stack,
    Box,
    Input,
    FormControl,
    FormLabel,
    FormHelperText
} from '@chakra-ui/react'

export default function CustomCard(){

    return (
        <Box minW='100%'>
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
        </Box>
    )

}