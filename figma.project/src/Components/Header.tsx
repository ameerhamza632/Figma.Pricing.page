import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <div>
      <Box as="section" pb='28'>
        <Box  color='gray.50' bg="#8186D5" pt="98px" pb="198px" textAlign="center" >
          <Heading
            color="white"
            fontWeight="extrabold"
            fontSize='5xl'
            lineHeight="130%"
            pt="4"
          >
            Simple Pricing For Your Business
          </Heading>
          <Text
            color="white"
            fontWeight="medium"
            fontSize={["lg", "lg", "2xl"]}
            lineHeight="45px"
          >
            Plans that are carefully crafted to suit your business.
          </Text>
        </Box>
      </Box>
    </div>
  );
}