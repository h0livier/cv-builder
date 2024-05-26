import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Collapse,
    useDisclosure,
    Box
} from '@chakra-ui/react';
import React, {useState} from "react";
import {ChevronDownIcon, ChevronUpIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons";

export interface ExpendableCardProps{
    id: string,
    title: string,
    body: React.ReactNode,
    changeOrder: (id: string, value: number) => void,
}

export default function ExpendableCard({id, title, body, changeOrder}: ExpendableCardProps){

    const { isOpen, onToggle } = useDisclosure()
    const [isVisible, setIsVisible] = useState(true)

    return (
        <Card px={5}>
            <CardHeader minW='100%' borderBottom={isOpen ? '1px': '0px'}>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    <Heading flexGrow={1} onClick={onToggle} size='lg'>{title}</Heading>
                    <Box zIndex={10} display='flex' gap={4}>
                        <ChevronUpIcon boxSize={8} onClick={() => changeOrder(id, -1)} />
                        <ChevronDownIcon boxSize={8} onClick={() => changeOrder(id, 1)} />
                        {isVisible ? <ViewIcon boxSize={7} onClick={() => setIsVisible(!isVisible)} /> : <ViewOffIcon boxSize={7} onClick={() => setIsVisible(!isVisible)} /> }
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