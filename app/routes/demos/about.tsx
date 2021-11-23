import { Outlet } from "remix";
import type { MetaFunction } from "remix";
import { Box, Text, Code, Divider, Link } from "@chakra-ui/react";

export let meta: MetaFunction = () => {
  return {
    title: "About Remix"
  };
};

export default function Index() {
  return (
    <Box>
      <Box>
        <Text as="h2">About Us</Text>
        <Text>
          Ok, so this page isn't really <em>about us</em>, but we did want to
          show you a few more things Remix can do.
        </Text>
        <Text>
          Did you notice that things look a little different on this page? The
          CSS that we import in the route file and include in its{" "}
          <Code>links</Code> export is only included on this route and its
          children.
        </Text>
        <Text>
          Wait a sec...<em>its children</em>? To understand what we mean by
          this,{" "}
          <Link href="https://remix.run/tutorial/4-nested-routes-params">
            read all about nested routes in the docs
          </Link>
          .
        </Text>
        <Divider />
        <Outlet />
      </Box>
    </Box>
  );
}
