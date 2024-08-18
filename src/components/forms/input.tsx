import {FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/react";

export interface FormInputProps{
    name: string,
    label: string,
    helpText?: string,
    type?: string;
    placeholder?: string,
    value?:string,
    updateValue?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function FormInput({name, label, helpText, placeholder, value, updateValue, type = 'text'}: FormInputProps): JSX.Element {

    return (
        <FormControl size='md'>
            <FormLabel>{label}</FormLabel>
            <Input name={name} placeholder={placeholder} type={type} value={value} onChange={updateValue} />
            <FormHelperText>{helpText}</FormHelperText>
        </FormControl>
    )

}