import { Link, Outlet } from "remix";
import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export function meta() {
  return { title: "Boundaries Demo" };
}

export default function Boundaries() {
  return (
    <Box>
      <Box>
        <Outlet />
      </Box>

      <Box>
        <Text as="h2">Click these Links</Text>
        <UnorderedList>
          <ListItem>
            <Link to=".">Start over</Link>
          </ListItem>
          <ListItem>
            <Link to="one">
              Param: <i>one</i>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="two">
              Param: <i>two</i>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="this-record-does-not-exist">This will be a 404</Link>
          </ListItem>
          <ListItem>
            <Link to="shh-its-a-secret">And this will be 401 Unauthorized</Link>
          </ListItem>
          <ListItem>
            <Link to="kaboom">This one will throw an error</Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
