import { useCatch, Link, json, useLoaderData, Outlet } from "remix";
import type { LoaderFunction } from "remix";
import { Link as ChakraLink, Text, Code } from "@chakra-ui/react";

export default function Boundaries() {
  return (
    <>
      <Text as="h2">Params</Text>
      <Text>
        When you name a route segment with $ like{" "}
        <Code>routes/users/$userId.js</Code>, the $ segment will be parsed from
        the URL and sent to your loaders and actions by the same name.
      </Text>
      <Text as="h2">Errors</Text>
      <Text>
        When a route throws and error in it's action, loader, or component,
        Remix automatically catches it, won't even try to render the component,
        but it will render the route's ErrorBoundary instead. If the route
        doesn't have one, it will bubble up to the routes above it until it hits
        the root.
      </Text>
      <Text>So be as granular as you want with your error handling.</Text>
      <Text as="h2">Not Found</Text>
      <Text>
        (and other{" "}
        <ChakraLink href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses">
          client errors
        </ChakraLink>
        )
      </Text>
      <Text>
        Loaders and Actions can throw a <Code>Response</Code> instead of an
        error and Remix will render the CatchBoundary instead of the component.
        This is great when loading data from a database isn't found. As soon as
        you know you can't render the component normally, throw a 404 response
        and send your app into the catch boundary. Just like error boundaries,
        catch boundaries bubble, too.
      </Text>
    </>
  );
}
