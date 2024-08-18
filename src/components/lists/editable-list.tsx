import React, { JSXElementConstructor, ReactElement } from "react";
import {Stack, StackDivider} from "@chakra-ui/react";

export interface EditableListItem {
    index: string
}

export interface EditableListProps {
    items: EditableListItem[]
    renderChild: (item: EditableListItem) => React.ReactNode;
    customDivider?: ReactElement<any, string | JSXElementConstructor<any>>;
}

export default function EditableList({items, renderChild, customDivider}: EditableListProps) {

    return(
        <Stack divider={customDivider ? customDivider : <StackDivider borderColor='gray.200' />} spacing={4}>
            {items.map(item => renderChild(item))}
        </Stack>
    )

}