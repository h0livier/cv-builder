import './App.css'
import {Box, Button, Stack} from "@chakra-ui/react";
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
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
]

/*
interface CurriculumVitae{
    firstName: string,
    lastName: string,
}*/

export default function App() {

    //const [data, setData] = useStorage('local', 'cvData', {})

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
        <Box px={['5%', '10%', '15%']} pt={'5%'} bg='gray.100' minH='100vh'>

            <NavigationStepper activeStep={activeStep} steps={steps} />

            <Box py={5}>
                {renderContent()}
            </Box>
            
            
                <Stack display='flex' alignItems='center' w='100%' gap={2}>
                    <Stack w={['100%', '75%', '50%']}>
                        {(activeStep < 3) && <Button onClick={nextStep}>Etape suivante</Button>}
                        {(activeStep !== 1) && <Button variant='outline' onClick={previousStep}>Etape précédente</Button>}
                    </Stack>
                </Stack>
            
        </Box>
    )
}
