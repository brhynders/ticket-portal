import {
  Button,
  Group,
  LoadingOverlay,
  SegmentedControl,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { Layout } from "../layouts/Layout";
import { pb } from "../state";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "wouter";

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

const TicketTable = () => {
  const [location, setLocation] = useLocation();
  const [ticketType, setTicketType] = useState("All Tickets");
  const ticketsQuery = useQuery({
    queryKey: ["tickets", pb.authStore.username, ticketType],
    queryFn: (context) => {
      const [_a, _b, ticketType] = context.queryKey;
      if (ticketType == "All Tickets") {
        return pb.collection("tickets").getFullList({
          filter: `accountId = "${pb.authStore.model.id}"`,
          sort: "-created",
        });
      } else {
        const closed = ticketType == "Closed Tickets" ? true : false;
        return pb.collection("tickets").getFullList({
          filter: `accountId = "${pb.authStore.model.id}" && closed = ${closed}`,
          sort: "-created",
        });
      }
    },
  });

  return (
    <>
      <SegmentedControl
        mt={30}
        value={ticketType}
        onChange={setTicketType}
        data={["All Tickets", "Open Tickets", "Closed Tickets"]}
      />
      <Table stickyHeader pos="relative" mt={5}>
        <LoadingOverlay
          visible={ticketsQuery.isLoading}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Ticket Name</Table.Th>
            <Table.Th>Ticket Date</Table.Th>
            <Table.Th>Ticket Items</Table.Th>
            <Table.Th>Ticket Status</Table.Th>
            <Table.Th>Ticket Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {!ticketsQuery.isLoading &&
            ticketsQuery.data.map((ticket) => (
              <Table.Tr key={ticket.id}>
                <Table.Td>{ticket.name}</Table.Td>
                <Table.Td>
                  {new Date(ticket.created).toLocaleDateString()}
                </Table.Td>
                <Table.Td>{ticket.items.length}</Table.Td>
                <Table.Td>{ticket.closed ? "Closed" : "Open"}</Table.Td>
                <Table.Td>
                  <Button
                    onClick={() => setLocation(`/ticket/${ticket.id}`)}
                    variant="outline"
                    size="xs"
                  >
                    View
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
        </Table.Tbody>
      </Table>
    </>
  );
};

export const Tickets = () => {
  return (
    <Layout>
      <TopBar />
      <TicketTable />
    </Layout>
  );
};
