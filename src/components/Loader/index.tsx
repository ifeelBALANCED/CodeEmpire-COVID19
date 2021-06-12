import React, {FC} from 'react';
import {Spinner} from "@chakra-ui/react";

type LoaderProps = { size?: string }
export const Loader: FC<LoaderProps> = ({size}) => {
    return (
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size={size}
        />
    );
};
