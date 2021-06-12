import React, {FC} from 'react';
import {Flex} from "@chakra-ui/react";
import {Logo} from '../Logo';
import {Search} from '../Search';

export const Header: FC = () => {
    return (
        <Flex
            justify="space-between"
            align="center"
        >
            <Logo/>
            <Search/>
        </Flex>
    );
};

