import {
    Step,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    Stepper,
    Stack,
    Flex,
    Text
} from '@chakra-ui/react'

export interface Step{
    title: string,
    description: string
}

interface NavigationStepperProps{
    activeStep: number
    steps: Step[]
}

export default function NavigationStepper({activeStep, steps}: NavigationStepperProps) {

    return (
        <Stack>
             <Stepper size={'md'} index={activeStep}>
                {steps.map((_step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>
                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
            <Flex direction='column' alignItems='center' pt={5} justifyContent={'center'}>
                <Text size={'lg'} fontWeight='bold'>{steps[activeStep-1].title}</Text>
                <Text>{steps[activeStep-1].description}</Text>
            </Flex>

        </Stack>
       
    )
}