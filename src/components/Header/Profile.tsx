import { Flex, Text, Box, Avatar } from "@chakra-ui/react";


interface ProfileProps{
  showProfileData?: boolean;
}



export function Profile({showProfileData=true}:ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
              <Box mr="4" textAlign="right">
              <Text>Leandro Rodrigues</Text>
              <Text color="gray.300" fontSize="small">
                leandro.rodrigues00@hotmail.com
              </Text>
            </Box>
      )}

      <Avatar
        size="md"
        name="Leandro Rodrigues"
        src="https://avatars.githubusercontent.com/u/26658051?s=60&v=4"
      />
    </Flex>
  );
}
