import { Box, Flex, Heading, Button, Icon, Table, Tr, Th, Td, Tbody, Thead, Checkbox, Text} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  return(
    <Box>
      <Header />

      <Flex 
        w="100%"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar/>

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button
              as="a"
              size="sm" 
              fontWeight="sm"
              colorScheme="pink"
              leftIcon={ <Icon as={RiAddLine} fontSize="18"/>}
            >
            Criar Novo
            </Button>

          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                <Th>Data de Cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Elienai Soares</Text>
                    <Text fontSize="sm" color="gray.300">elienay.saores07@gmail.com</Text>
                  </Box>
                </Td>
                <Td>16 de Novembro de 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm" 
                    fontWeight="sm"
                    colorScheme="pink"
                    leftIcon={ <Icon as={RiPencilLine} fontSize="16"/>}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}