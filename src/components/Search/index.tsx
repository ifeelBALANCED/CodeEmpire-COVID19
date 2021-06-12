import React, {FC} from 'react';
import {Button, Flex, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {$textStore, inputChanged} from "./models";
import {SearchIcon} from "@chakra-ui/icons";
import {useStore} from "effector-react";
import {Loader} from "../Loader";
import '../../index.css'

type ChangeType = { target: { value: string } }

export const Search: FC = () => {
    const text = useStore($textStore)
    const changeHandler = ({target: {value}}: ChangeType) => inputChanged(value)
    return (
        <InputGroup>
            <Flex align="center">
                <Input
                    h="80px"
                    w="600px"
                    type="text"
                    fontSize="48px"
                    value={text}
                    className="input"
                    onChange={changeHandler}
                    placeholder="Search..."
                    borderRadius="20px"
                />
                <InputRightElement children={
                    <Button bg="none">
                        <SearchIcon h={30} w={30} color="#666"/>
                    </Button>
                }/>
            </Flex>
        </InputGroup>
    );
};

