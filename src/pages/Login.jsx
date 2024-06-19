import {
  Stack,
  SimpleGrid,
  useMantineTheme,
  Image,
  Title,
  Text,
  Paper,
  TextInput,
  PasswordInput,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { pb } from "../state";

const LoginForm = () => {
  const form = useForm({
    initialValues: {
      domain: "",
      password: "",
    },
  });

  const login = useMutation({
    mutationFn: async vals =>
      await pb.collection("users").authWithPassword(vals.domain, vals.password),
    onError: () =>
      form.setErrors({
        domain: "Invalid login credentials. Please try again.",
        password: "Invalid login credentials. Please try again.",
      }),
  });

  return (
    <Paper withBorder shadow="sm" p={20} w="100%" maw={350} radius="md">
      <form onSubmit={form.onSubmit(login.mutate)}>
        <TextInput label="Domain" {...form.getInputProps("domain")} />
        <PasswordInput
          mt={5}
          label="password"
          {...form.getInputProps("password")}
        />
        <Button mt={10} type="submit" loading={login.isPending}>
          Login
        </Button>
      </form>
    </Paper>
  );
};

export const Login = () => {
  const theme = useMantineTheme();
  return (
    <SimpleGrid cols={2} spacing={0} h="100%">
      <Stack justify="center" align="center" gap={0}>
        <Text c="dimmed">E.W.C. Ticket Portal</Text>
        <Title mb={30} order={2}>
          Login To Your Account
        </Title>
        <LoginForm />
      </Stack>
      <Stack justify="center" align="center" bg={theme.colors.blue[6]}>
        <Image w={275} src="/EWC-logo.png" />
      </Stack>
    </SimpleGrid>
  );
};
