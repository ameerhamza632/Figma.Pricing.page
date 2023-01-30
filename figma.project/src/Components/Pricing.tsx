import {
    Box,
    Flex,
    Text,
    Button,
    HStack,
    Icon,
    Stack,
    StackProps,
    VStack,
  } from "@chakra-ui/react";
  import Checkicon from "@/icons/Icon";
  
  export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
      <HStack as="li" spacing="12px" {...rest} alignItems="start">
        <Icon as={Checkicon} boxSize="20px" />
        <Text h="50px">{children}</Text>
      </HStack>
    );
  };
  
  export default function Pricing() {
    return (
      <div>
        <Box>
          <Box mx="auto" mt="-256px" overflow="hidden" maxW='890px' boxShadow='dark-lg' borderRadius='20px'>
            <Flex
              direction={["column", "column", "column", "row"]}
              mx="auto"
              bg="white"
              maxW="890px"
            >
              <Box
                textAlign="center"
                borderRadius="12px"
                backgroundColor="#F0EAFB"
                padding="60px"
              >
                <VStack mt="15">
                  <Text
                    fontWeight="800"
                    fontSize={["18px", "18px", "20px", "24px"]}
                    line-height="32px"
                    color='#8186D5'
                  >
                    Premium PRO <br />
                    $390
                  </Text>
  
                  <Text fontWeight="500" fontSize="18px" lineHeight="38px" color='#8186D5'>
                    Billed just once
                  </Text>
                  <Button
                    background="#8186D5"
                    width={["150px", "180px", "180px", "200px"]}
                    height="51px"
                    border-borderRadius="8px"
                    mt="24px"
                    boxShadow='dark-lg'
                  >
                    Get Started
                  </Button>
                </VStack>
              </Box>
              <Box
                mx={["20px", "40px", "50px", "60px"]}
                fontWeight="semibold"
                fontSize={["14px", "14px", "16px", "18px"]}
                bg="white"
              >
                <Text  pt="6" fontSize='1.5xl' color='#8186D5'>
                  Access These Features When You Get This Pricing Package For Your
                  Business.
                </Text>
                <Stack
                  as="ul"
                  spacing="1px"
                  pt="24px"
                  pl='60px'
                  fontSize='medium'
                >
                  <ListItem>International Calling and API</ListItem>
                  <ListItem>Additional Phone Numbers</ListItem>
                  <ListItem>Automated Messages Zapier</ListItem>
                  <ListItem>24/7 Support and Consulting</ListItem>
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Box>
      </div>
    );
  }