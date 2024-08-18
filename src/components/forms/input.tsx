import {FormControl, FormHelperText, FormLabel, Input, Textarea} from "@chakra-ui/react";

export interface FormInputProps{
    name: string,
    label: string,
    helpText?: string,
    type?: string;
    placeholder?: string,
    value?:string,
    updateValue?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    updateTextAreaValue?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export default function FormInput({name, label, helpText, placeholder, value, updateValue, updateTextAreaValue, type = 'text'}: FormInputProps): JSX.Element {

    if(type === 'textarea'){
        return (
            <FormControl size='md'>
                <FormLabel>{label}</FormLabel>
                <Textarea name={name} placeholder={placeholder} value={value} onChange={updateTextAreaValue} />
                <FormHelperText>{helpText}</FormHelperText>
            </FormControl>
        )
    }

    return (
        <FormControl size='md'>
            <FormLabel>{label}</FormLabel>
            <Input name={name} placeholder={placeholder} type={type} value={value} onChange={updateValue} />
            <FormHelperText>{helpText}</FormHelperText>
        </FormControl>
    )

}