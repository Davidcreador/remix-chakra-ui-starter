import { Link } from "remix";
import { Box, Text, Code } from "@chakra-ui/react";

export default function AboutIndex() {
  return (
    <Box>
      <Text as="p">
        You are looking at the index route for the <Code>/about</Code> URL
        segment, but there are nested routes as well!
      </Text>
      <Text as="p">
        <strong>
          <Link to="whoa">Check out one of them here.</Link>
        </strong>
      </Text>
    </Box>
  );
}
