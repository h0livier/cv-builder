import ExpendableCard from "@/components/expendable-card.tsx";
import {Stack} from "@chakra-ui/react";
import {getUniqueID} from "@/helpers/unique-id.helper.ts";
import React, {useState} from "react";
import ProfileSection from "@/components/sections/profile.tsx";
import SchoolSection from "@/components/sections/school.tsx";
import WorkSection from "@/components/sections/work.tsx";

interface Section{
    id: string,
    title: string,
    body: React.ReactNode,
}

export default function OtherPage(){

    const [sections, setSections] = useState<Section[]>([
        {id: getUniqueID('1'), title: 'Formation Scolaire', body: <SchoolSection /> },
        {id: getUniqueID('2'), title: 'Profil', body: <ProfileSection /> },
        {id: getUniqueID('3'), title: 'Expérience Professionnelle', body: <WorkSection /> },
        {id: getUniqueID('4'), title: 'Compétences', body: <WorkSection /> },
        {id: getUniqueID('5'), title: 'Langues', body: <WorkSection /> },
        {id: getUniqueID('6'), title: 'Compétences', body: <WorkSection /> },
        {id: getUniqueID('7'), title: 'Loisirs', body: <WorkSection /> }
    ])

    function detectMove(id: string, to: number){
        const position = sections.findIndex(item => item.id === id);
        moveSection(position, position+to)
    }

    function moveSection(from: number, to: number) {
        let numberOfDeletedElm = 1;
        const newArray = [...sections]
        const elm = newArray.splice(from, numberOfDeletedElm)[0];
        numberOfDeletedElm = 0;
        newArray.splice(to, numberOfDeletedElm, elm)
        setSections(newArray)
    }

    return(
        <Stack gap={3}>
            {sections.map(section => <ExpendableCard key={section.id} title={section.title} body={section.body} id={section.id} changeOrder={detectMove} />)}
        </Stack>
    )

}