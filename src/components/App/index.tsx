import React, {FC} from 'react';
import {ChakraProvider, Flex, theme, Container} from "@chakra-ui/react"
import {Header} from "../Header";
import {CovidTable} from "../CovidTable";

export const App: FC = () => {
    return (
        <ChakraProvider theme={theme}>
            <Flex pt="40px">
                <Container maxW="1800px">
                    <Header/>
                    <CovidTable/>
                </Container>
            </Flex>
        </ChakraProvider>
    );
};

