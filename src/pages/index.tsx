import Layout from "@/layout/Layout";
import PageTitle from "@/components/PageTitle";
import {
  Flex,
  Card,
  Text,
  Heading,
  Icon,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { HiCamera, HiCube, HiTruck, HiUserGroup } from "react-icons/hi";
import CardDash from "@/components/CardDash";
import { useDashboard } from "@/services/hooks/useDashboard";

export default function Home() {
  const query = useDashboard();
  return (
    <>
      <Layout>
        <PageTitle title="Painel de Controle" />
        <Flex w="100%" direction="column">
          <Flex gap="4" wrap="wrap" mb="8">
            <CardDash
              title="Fotos"
              counter={query.data?.files.length}
              icon={HiCamera}
            />
            <CardDash
              title="Usuários"
              counter={query.data?.users.length}
              icon={HiUserGroup}
            />
            <CardDash
              title="Engregas"
              counter={query.data?.shipped.length}
              icon={HiTruck}
            />
            <CardDash
              title="Pedidos"
              counter={query.data?.deliveries.length}
              icon={HiCube}
            />
          </Flex>
          <Flex direction="column">
            <Text as="i" fontSize="3xl">
              Ultimos Usuários
            </Text>
            <Flex>
              <Table bg="white" boxShadow="lg">
                <Thead bg="lifewall-yellow" color="lifewall-black">
                  <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th>Data de Cadastro</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {query.data?.lastUsers.map((user, key) => {
                    return (
                      <Tr key={key}>
                        <Td>{user.name}</Td>
                        <Td>{user.email}</Td>
                        <Td>
                          {new Date(user.createdAt).toLocaleDateString(
                            "pt-BR",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
