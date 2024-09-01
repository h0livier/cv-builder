import { Box, Stack, Text } from "@chakra-ui/react";

export default function Test(){

    return(
        <Box w='210mm' h='297mm' bg='white'>
            <Box bg='blue.500' paddingX='10' paddingY={2}>
                <Text color='white' fontSize={26} fontWeight='bolder'>Curriculum Vitae</Text>
            </Box>
            <Box display='flex' paddingTop={5}>
                <Stack w="30%" paddingX={5}>
                    <Text fontSize={18} fontWeight={'bold'}>Données personnelles</Text>
                    <Stack spacing={0}>
                        <Text fontSize={16} fontWeight={'bold'}>Nom</Text>
                        <Text fontSize={14}>Olivier Hayot</Text>
                    </Stack>
                    <Stack spacing={0}>
                        <Text fontSize={16} fontWeight={'bold'}>Adresse</Text>
                        <Text fontSize={14}>Rue grégoire wincqz 335, 7060 Soignies</Text>
                    </Stack>
                    <Stack spacing={0}>
                        <Text fontSize={16} fontWeight={'bold'}>Téléphone</Text>
                        <Text fontSize={14}>+32471646015</Text>
                    </Stack>
                    <Stack spacing={0}>
                        <Text fontSize={16} fontWeight={'bold'}>Adresse e-mail</Text>
                        <Text fontSize={14}>olivier.hayot@outlook.com</Text>
                    </Stack>
                </Stack>
                <Box w="70%" bg='white' paddingLeft={3}>
                    <Stack spacing={5}>
                        <Text>Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique.</Text>
                        <Stack>
                            <Text fontSize={20}>Expériences</Text>
                            <Stack spacing={0}>
                                <Text fontSize={16} fontWeight='600'>Haute Ecole en Hainaut</Text>
                                <Text fontSize={14} fontWeight='500' fontStyle={"italic"}>Du 04/05/2022 au 04/09/2024 - Etudiant</Text>
                                <Text>Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littér</Text>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Text fontSize={20}>Etudes</Text>
                            <Stack spacing={0}>
                                <Text fontSize={16} fontWeight='600'>Haute Ecole en Hainaut</Text>
                                <Text fontSize={14} fontWeight='500' fontStyle={"italic"}>Du 04/05/2022 au 04/09/2024 - Etudiant</Text>
                                <Text>Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littér</Text>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Text fontSize={20}>Compétences</Text>
                            <Stack spacing={0}>
                                <Text>Contrairement, Contrairement, Contrairement, Contrairement, Contrairement, Contrairement</Text>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
            
        </Box>
    )
}