import { useQuery } from "@tanstack/react-query";
import { Layout } from "../layouts/Layout";
import { useParams } from "wouter";
import { pb } from "../state";
import { Loader, Paper, SimpleGrid, Text, Title } from "@mantine/core";

export const Ticket = () => {
  const params = useParams();
  const ticketId = params.id;
  const ticketQuery = useQuery({
    queryKey: ["ticket", ticketId],
    queryFn: () => pb.collection("tickets").getOne(ticketId),
  });

  return (
    <Layout>
      {ticketQuery.isLoading ? (
        <Loader />
      ) : (
        <>
          <Title order={3}>{ticketQuery.data.name}</Title>
          {ticketQuery.data.closed ? (
            <Text c="red">Closed</Text>
          ) : (
            <Text>Open</Text>
          )}
          <SimpleGrid mt={20} cols="2">
            <Paper withBorder shadow="sm" p={20}>
              <Title mb={15} fw={600} order={5}>
                Ticket Items
              </Title>
            </Paper>
            <Paper withBorder shadow="sm" p={20}>
              <Title mb={15} fw={600} order={5}>
                Ticket Comments
              </Title>
            </Paper>
          </SimpleGrid>
        </>
      )}
    </Layout>
  );
};
