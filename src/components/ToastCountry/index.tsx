import React, {FC, useCallback} from 'react';
import {Td, Tr, useToast} from "@chakra-ui/react";

type ToastProps = {
    ID: string,
    index: number,
    Country: string,
    TotalConfirmed: number
    TotalRecovered: number
    TotalDeaths: number
}
export const ToastCountry: FC<ToastProps> = ({
         ID,
         index,
         Country,
         TotalConfirmed,
         TotalDeaths,
         TotalRecovered
     }) => {
    const toast = useToast()
    const callToast = useCallback(() => {
            toast({
                title: `${Country}`,
                description: `
               Total Confirmed - ${TotalConfirmed}
               Total Deaths - ${TotalDeaths}
               Total Recovered - ${TotalRecovered}
            `,
                status: "info",
                duration: 3000,
                isClosable: true,
            })
        },
        []
    );

    return (
        <Tr key={ID} onClick={callToast}>
            <Td>{index}</Td>
            <Td>{Country}</Td>
            <Td>{TotalConfirmed}</Td>
        </Tr>
    )
}

