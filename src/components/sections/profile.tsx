import {Button, Stack} from "@chakra-ui/react";
import FormInput from "../forms/input";
import { useEffect, useState } from "react";
import { useStorage } from "@/hooks/useStorage";


export default function ProfileSection(){

    const [description, setDescription] = useState({
        profile: ''
    })

    const [profile, setProfile] = useStorage('local', 'profile', []);

    useEffect(() => {
        if(profile){
            setDescription({profile: profile})
        }
    }, [])

    function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setDescription(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
    }

    return(
        <>
            <Stack spacing={3}>
                <FormInput label="" name='profile' type="textarea" value={description.profile} updateTextAreaValue={handleInputChange} />
                <Stack direction='row'>
                    <Button flexGrow={1} onClick={() => setProfile(description.profile)}>Enregistrer les modifications</Button>
                </Stack>
            </Stack>
        </>
    )

}