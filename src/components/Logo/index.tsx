import React, {FC} from 'react';
import {Flex, Heading, Image} from "@chakra-ui/react"
import covidImg from '../../assets/icons/logo.svg'

export const Logo: FC = () => {
    return (
        <Flex align="center" w="100%">
            <Image
                boxSize="200px"
                objectFit="cover"
                src={covidImg}
                alt="COVID19"
            />
            <Heading
                as="h1"
                fontSize={72}
                className="statistic"
                fontFamily="Roboto"
            >
                STATISTIC
            </Heading>
        </Flex>
    );
};

