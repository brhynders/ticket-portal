import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { Layout } from "../layouts/Layout";
import { pb } from "../state";

const TopBar = ({ usedTickets = 0 }) => {
  const domain = pb.authStore.model.username;
  const ticketsPerMonth = pb.authStore.model.tickets_per_month;
  const ticketsRemaining = ticketsPerMonth - usedTickets;

  return (
    <Group justify="space-between">
      <Stack gap={3}>
        <Title order={3}>{domain}</Title>
        <Text c="dimmed">
          {ticketsRemaining} of {ticketsPerMonth} tickets remaining
        </Text>
      </Stack>
      <Button>New Ticket</Button>
    </Group>
  );
};

export const Tickets = () => {
  return (
    <Layout>
      <TopBar />
      Tickets
    </Layout>
  );
};
