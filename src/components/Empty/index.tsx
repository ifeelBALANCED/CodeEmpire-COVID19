import React, {FC} from 'react';
import {Td, Tr} from "@chakra-ui/react";

export const Empty: FC = (): JSX.Element => {
    return (
        <Tr>
            <Td>No</Td>
            <Td>Fucking</Td>
            <Td>Countries</Td>
        </Tr>
    );
};

