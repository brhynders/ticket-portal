import {
  Box,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { pb } from "../state";

const Header = () => {
  const theme = useMantineTheme();
  return (
    <Box py={10} bg={theme.colors.blue[4]}>
      <Container w="100%" size="lg">
        <Group justify="space-between">
          <Image src="/EWC-logo.png" w={175} />
          <Button
            c={theme.colors.blue[6]}
            bg="white"
            onClick={() => pb.authStore.clear()}
          >
            Logout
          </Button>
        </Group>
      </Container>
    </Box>
  );
};

const Footer = () => {
  const theme = useMantineTheme();
  return (
    <Box py={10} bg={theme.colors.blue[4]}>
      <Text size="xs" ta="center" c="white">
        Copyright ©️ 2024, Elegant Web Creations. All Rights Reserved.
      </Text>
    </Box>
  );
};

const Content = ({ children }) => {
  return (
    <Container flex={1} w="100%" size="lg">
      {children}
    </Container>
  );
};

export const Layout = ({ children }) => {
  return (
    <Stack h="100%" gap={50}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Stack>
  );
};
