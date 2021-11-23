import { Link } from "remix";
import { Box, Text, Code } from "@chakra-ui/react";

export default function AboutIndex() {
  return (
    <Box>
      <Text as="p">
        Whoa, this is a nested route! We render the <Code>/about</Code> layout
        route component, and its <Code>Outlet</Code> renders our route
        component. 🤯
      </Text>
      <Text as="p">
        <strong>
          <Link to="..">
            Go back to the <Code>/about</Code> index.
          </Link>
        </strong>
      </Text>
    </Box>
  );
}
