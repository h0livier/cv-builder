import React from "react";
import {Stack, StackDivider} from "@chakra-ui/react";

export interface EditableListItem {
    index: string
}

export interface EditableListProps {
    items: EditableListItem[]
    renderChild: (item: EditableListItem) => React.ReactNode;
}

export default function EditableList({items, renderChild}: EditableListProps) {

    return(
        <Stack divider={<StackDivider borderColor='gray.200' />} spacing={4}>
            {items.map(item => renderChild(item))}
        </Stack>
    )

}