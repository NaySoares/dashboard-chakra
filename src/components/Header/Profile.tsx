import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Elienai Soares</Text>
        <Text color="gray.300" fontSize="small">
          elienay.saores07@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Elienai Soares"
        src="http://github.com/NaySoares.png"
      />
    </Flex>
  );
}
