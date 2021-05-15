import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Fernando Martins Pimenta</Text>
        <Text color="gray.300" fontSize="small">
          fernando.m.pimenta@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Fernando Pimenta"
        src="https://github.com/pimentafm.png"
      ></Avatar>
    </Flex>
  );
}
