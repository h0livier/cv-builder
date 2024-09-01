import FormInput from "@/components/forms/input";
import { useStorage } from "@/hooks/useStorage";
import {
    Card,
    CardBody,
    CardHeader,
    Heading,
    Stack
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface CommonData{
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    address: string,
    drivingLicense: string,
    linkedin: string,
    website: string,
    nationality: string
}

export default function DataPages(){

    const [localData, setLocalData] = useStorage('local', 'common', []);
    const [datas, setDatas] = useState<CommonData>({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        drivingLicense: '',
        linkedin: '',
        website: '',
        nationality: ''
    })

    useEffect(() => {
        if(localData){
            setDatas(localData)
        }
    }, [])

    useEffect(() => {
        setLocalData(datas)
    }, [datas])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setDatas(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
    }

    return (
        <Card minW='100%' px={5}>
            <CardHeader borderBottom='1px'>
                <Heading size='lg'>Mes données</Heading>
            </CardHeader>
            <CardBody>
                <Stack spacing={3} direction={{base: 'column', md:'row'}}>
                    <FormInput label="Prénom" name='firstName' value={datas.firstName} updateValue={handleInputChange} />
                    <FormInput label="Nom" name='lastName' value={datas.lastName} updateValue={handleInputChange} />
                </Stack>
                <Stack spacing={3} direction={{base: 'column', md:'row'}}>
                    <FormInput label="Email" name='email' value={datas.email} updateValue={handleInputChange} />
                    <FormInput label="Numéro de téléphone" name='phoneNumber' value={datas.phoneNumber} updateValue={handleInputChange} />
                </Stack>
                <FormInput label="Adresse" name='address' value={datas.address} updateValue={handleInputChange} />
                <Stack spacing={3} direction={{base: 'column', md:'row'}}>
                    <FormInput label="Nationalité" name='nationality' value={datas.nationality} updateValue={handleInputChange} />
                    <FormInput label="Permis de conduire" name='drivingLicense' value={datas.drivingLicense} updateValue={handleInputChange} />
                </Stack>
                <Stack spacing={3} direction={{base: 'column', md:'row'}}>
                    <FormInput label="Linkedin" name='linkedin' value={datas.linkedin} updateValue={handleInputChange} />
                    <FormInput label="Site internet" name='website' value={datas.website} updateValue={handleInputChange} />
                </Stack>
            </CardBody>
        </Card>
    )

}