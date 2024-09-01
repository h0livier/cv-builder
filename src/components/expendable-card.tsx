import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Collapse,
    useDisclosure,
    Box
} from '@chakra-ui/react';
import React from "react";
import { ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

export interface ExpendableCardProps{
    id: string,
    title: string,
    body: React.ReactNode,
    changeOrder: (id: string, value: number) => void,
}

export default function ExpendableCard({title, body}: ExpendableCardProps){

    const { isOpen, onToggle } = useDisclosure()
    //const [isVisible, setIsVisible] = useState(true)

    return (
        <Card px={5}>
            <CardHeader minW='100%' borderBottom={isOpen ? '1px': '0px'}>
                <Box onClick={onToggle} display='flex' alignItems='center' justifyContent='space-between'>
                    <Heading flexGrow={1} size='md'>{title}</Heading>
                    <Box zIndex={10} display='flex' gap={4}>
                        {/*<ChevronUpIcon boxSize={8} onClick={() => changeOrder(id, -1)} />
                        <ChevronDownIcon boxSize={8} onClick={() => changeOrder(id, 1)} />*/}
                        {isOpen ? <ViewOffIcon boxSize={5} /> : <ViewIcon boxSize={5} />  }
                    </Box>
                </Box>
            </CardHeader>
            <Collapse
                in={isOpen}
                transition={{ enter: { duration: 0.5 } }}
            >
                <CardBody>
                    {body}
                </CardBody>
            </Collapse>
        </Card>
    )

}