import CvPdf from "@/components/documents/base";
import {
    Button,
    Card,
    CardBody,
    CardHeader, 
    Flex,
    Heading,
} from "@chakra-ui/react";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function LayoutPage(){

    /*const layouts = [
        {name: 'Basic', id: '1'},
    ]*/

    return (
        <Card px={5}>
            <CardHeader borderBottom='1px'>
                <Heading size='lg'>Export</Heading>
            </CardHeader>
            <CardBody>
                <Flex direction='column' justifyContent='center' alignItems='center'>
                    {/*<Heading textAlign='center' size='md' my={5}>Choisissez le modèle du CV</Heading>
                    <Grid gap={3} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>
                        {layouts.map(item => <GridItem key={item.id} background='gray.400'><p>{item.name}</p></GridItem>)}
                    </Grid>*/}
                    <Button background='blue.300'>
                        <PDFDownloadLink document={<CvPdf />} fileName="cv.pdf">
                            Télécharger le cv
                        </PDFDownloadLink>
                    </Button>
                </Flex>
            </CardBody>
        </Card>
    )

}