import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import { Box, SimpleGrid, Text, Code, Link as ChakraLink, Button, List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <SimpleGrid columns={2} spacing={10} my="10">
      <Box>
        <Text as="h2" fontSize="4xl">Welcome to Remix!</Text>
        <Text as="p">We're stoked that you're here. 🥳</Text>
        <Text as="p">
          Feel free to take a look around the code to see how Remix does things,
          it might be a bit different than what you’re used to. When you're
          ready to dive deeper, we've got plenty of resources to get you
          up-and-running quickly.
        </Text>
        <Text as="p">
          Check out all the demos in this starter, and then just delete the{" "}
          <Code>app/routes/demos</Code> and <Code>app/styles/demos</Code>{" "}
          folders when you're ready to turn this into your next project.
        </Text>
        <Button colorScheme="blue" mt="5">Button</Button>
      </Box>
      <Box>
        <Text as="h2" fontSize="2xl" fontWeight="bold">Demos In This App</Text>
        <UnorderedList>
          {data.demos.map(demo => (
            <ListItem key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Text as="h2" fontSize="2xl" fontWeight="bold">Resources</Text>
        <List spacing={3}>
          {data.resources.map(resource => (
            <ListItem key={resource.url} className="remix__page__resource">
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <ChakraLink href={resource.url}>{resource.name}</ChakraLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </SimpleGrid>
  );
}
