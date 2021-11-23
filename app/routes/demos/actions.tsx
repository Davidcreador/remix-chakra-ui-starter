import { useEffect, useRef } from "react";
import type { ActionFunction } from "remix";
import { Form, json, useActionData, redirect } from "remix";
import { Box, Flex, Text, Input, Button, UnorderedList, ListItem, Link, Code } from "@chakra-ui/react";

export function meta() {
  return { title: "Actions Demo" };
}

// When your form sends a POST, the action is called on the server.
// - https://remix.run/api/conventions#action
// - https://remix.run/guides/data-updates
export let action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");

  // Typical action workflows start with validating the form data that just came
  // over the network. Clientside validation is fine, but you definitely need it
  // server side.  If there's a problem, return the the data and the component
  // can render it.
  if (typeof answer !== "string") {
    return json("Come on, at least try!", { status: 400 });
  }

  if (answer !== "egg") {
    return json(`Sorry, ${answer} is not right.`, { status: 400 });
  }

  // Finally, if the data is valid, you'll typically write to a database or send or
  // email or log the user in, etc. It's recommended to redirect after a
  // successful action, even if it's to the same place so that non-JavaScript workflows
  // from the browser doesn't repost the data if the user clicks back.
  return redirect("/demos/correct");
};

export default function ActionsDemo() {
  // https://remix.run/api/remix#useactiondata
  let actionMessage = useActionData<string>();
  let answerRef = useRef<HTMLInputElement>(null);

  // This form works without JavaScript, but when we have JavaScript we can make
  // the experience better by selecting the input on wrong answers! Go ahead, disable
  // JavaScript in your browser and see what happens.
  useEffect(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);

  return (
    <Box className="remix__page">
      <Flex flexDir="column">
        <Text as="h2" fontSize="2xl">Actions!</Text>
        <Text>
          This form submission will send a post request that we handle in our
          `action` export. Any route can export an action to handle data
          mutations.
        </Text>
        <Form method="post" className="remix__form">
          <Text as="h3" fontSize="xl">Post an Action</Text>
          <Text>
            <i>What is more useful when it is broken?</i>
          </Text>
          <label>
            <Box>Answer:</Box>
            <Input ref={answerRef} name="answer" type="text" />
          </label>
          <Box>
            <Button>Answer!</Button>
          </Box>
          {actionMessage ? (
            <Text>
              <b>{actionMessage}</b>
            </Text>
          ) : null}
        </Form>
      </Flex>

      <Box>
        <Text as="h3" fontSize="xl">Additional Resources</Text>
        <UnorderedList>
          <ListItem>
            Guide:{" "}
            <Link href="https://remix.run/guides/data-writes">Data Writes</Link>
          </ListItem>
          <ListItem>
            API:{" "}
            <Link href="https://remix.run/api/conventions#action">
              Route Action Export
            </Link>
          </ListItem>
          <ListItem>
            API:{" "}
            <Link href="https://remix.run/api/remix#useactiondata">
              <Code>useActionData</Code>
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}
