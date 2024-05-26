import {
    Card,
    CardBody,
    CardHeader, Grid, GridItem,
    Heading,
} from "@chakra-ui/react";

export default function LayoutPage(){

    const layouts = [
        {name: 'ok'},
        {name: 'ok'},
        {name: 'ok'},
        {name: 'ok'},
        {name: 'ok'},
        {name: 'ok'},
        {name: 'ok'},
        {name: 'ok'},
        {name: 'ok'},
    ]

    return (
        <Card px={5}>
            <CardHeader borderBottom='1px'>
                <Heading size='lg'>Export</Heading>
            </CardHeader>
            <CardBody>
                <Heading textAlign='center' size='md' my={5}>Choisissez le modèle du CV</Heading>
                <Grid gap={3} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>
                    {layouts.map(item => <GridItem background='gray.400'><p>{item.name}</p></GridItem>)}
                </Grid>
            </CardBody>
        </Card>
    )

}