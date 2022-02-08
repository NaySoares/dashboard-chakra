import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Elienai Soares</Text>
          <Text color="gray.300" fontSize="small">
            elienay.saores07@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Elienai Soares"
        src="http://github.com/NaySoares.png"
      />
    </Flex>
  );
}
