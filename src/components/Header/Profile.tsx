import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Leandro Rodrigues</Text>
        <Text color="gray.300" fontSize="small">
          leandro.rodrigues00@hotmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Leandro Rodrigues"
        src="https://cdn.ome.lt/2GjXUqG8O9ahfUIpYOPFZif06Ug=/970x360/smart/uploads/conteudo/fotos/kratos1_HVpdorX.jpg"
      />
    </Flex>
  );
}
