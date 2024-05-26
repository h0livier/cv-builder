import {FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/react";

export interface FormInputProps{
    name: string,
    label: string,
    helpText?: string,
    type?: string;
    placeholder?: string,
}

export default function FormInput({name, label, helpText, placeholder, type = 'text'}: FormInputProps): JSX.Element {

    return (
        <FormControl size='md'>
            <FormLabel>{label}</FormLabel>
            <Input name={name} placeholder={placeholder} type={type} />
            <FormHelperText>{helpText}</FormHelperText>
        </FormControl>
    )

}