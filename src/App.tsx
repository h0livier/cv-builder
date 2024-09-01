import './App.css'
import {Box, Button, Flex, Stack} from "@chakra-ui/react";
import NavigationStepper from "@/components/stepper.tsx";
import {useSteps} from '@chakra-ui/react';
import DataPages from "@/pages/data-page.tsx";
import OtherPage from "@/pages/other-page.tsx";
import LayoutPage from "@/pages/layout-page.tsx";

export interface Step{
    title: string,
    description: string
}

const steps: Step[] = [
    { title: 'Données personelles', description: 'Vos informations' },
    { title: 'Détails', description: 'Votre carrière' },
    { title: 'Impression', description: 'Choisissez votre CV !' },
]

export default function App() {

    const { activeStep, setActiveStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    function nextStep(){
        if(activeStep !== steps.length){
            setActiveStep(activeStep + 1)
        }
    }

    function previousStep(){
        if(activeStep !== 1){
            setActiveStep(activeStep - 1)
        }
    }

    function renderContent(){
        switch (activeStep){
            case 1:
                return <DataPages />
            case 2:
                return <OtherPage />
            default:
                return <LayoutPage />
        }
    }

    return (
        <Box pt={'5%'} bg='gray.100' minH='100vh' pb={'3%'} >
            <Flex width='100%' justifyContent='center' flexDirection={'column'} alignItems={'center'}>
                <Box width={{base: '90%', sm: '80%', md: '70%', lg:'60%', xl: '50%'}}>
                    <NavigationStepper activeStep={activeStep} steps={steps} />
                    <Box py={5} my={10}>
                        {renderContent()}
                    </Box>
                    <Stack display='flex' alignItems='center' w='100%' gap={2}>
                        <Stack w={['100%', '75%', '50%']}>
                            {(activeStep < 3) && <Button background='blue.300' onClick={nextStep}>Etape suivante</Button>}
                            {(activeStep !== 1) && <Button variant='outline' onClick={previousStep}>Etape précédente</Button>}
                        </Stack>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}
