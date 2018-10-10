import React from "react";
import { Box, Card as C, Image, Heading, Text } from "rebass";

const Card = ({ image, title, text }) => (
  <Box width={256}>
    <C p={1} borderRadius={2} boxShadow="0 0 16px rgba(0, 0, 0, .25)">
      <Image src={image} />
      <Box px={2}>
        <Heading as="h3">{title}</Heading>
        <Text fontSize={0}>{text}</Text>
      </Box>
    </C>
  </Box>
);

export default Card;
