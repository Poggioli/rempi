"use client";

import { Button } from "@rempi-ui/button";
import { Container } from "@rempi-ui/container";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Typography } from "@rempi-ui/typography";
import { Accordion } from "@rempi-ui/accordion";
import { AlertDialog } from "@rempi-ui/alert-dialog";

export default function Page() {
  return (
    <Container variant="md">
      <Accordion.Root type="multiple" defaultValue={["item-1"]}>
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Header>
            <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Yes. It's unstyled by default, giving you freedom over the look and
            feel.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Header>
            <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-4">
          <Accordion.Header>
            <Accordion.Trigger>
              How long the content could be?
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            commodo justo ut tempus mollis. Praesent tincidunt vitae sapien
            varius mollis. Nunc non felis non dui hendrerit ornare. Integer
            volutpat congue eros id ultricies. Aenean viverra sagittis sapien,
            nec cursus turpis egestas sit amet. Nunc nec pulvinar turpis, in
            consectetur sapien. Aenean scelerisque neque vel tortor
            pellentesque, quis vulputate erat gravida. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Suspendisse quam arcu, porta
            vitae risus in, convallis ultricies sapien. Quisque feugiat egestas
            congue. Vestibulum ac porttitor erat, sed blandit sem. Phasellus
            lacus urna, tincidunt et efficitur et, luctus eget ligula. Quisque
            dictum placerat ante, sed dapibus felis volutpat quis. Nunc dolor
            sem, tincidunt vel ultrices in, feugiat et nisi. Morbi augue tellus,
            malesuada id accumsan quis, eleifend ac elit. Aliquam pretium diam
            quis nisi consectetur fringilla. Curabitur varius augue sed justo
            auctor dignissim. Maecenas quis lacus non leo varius rhoncus.
            Pellentesque rhoncus lectus a vehicula mattis. Donec nec lorem eros.
            Nulla vitae libero malesuada, pellentesque orci et, ornare dolor.
            Etiam mollis augue purus, in dignissim eros fringilla id. Etiam
            metus urna, tincidunt sed nibh eu, semper rhoncus ante. Morbi
            laoreet nisi hendrerit, ullamcorper nisl at, ornare mi. Nulla ut.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
      <Flex direction="column" alignItems="center">
        <Button
          as="a"
          href="https://google.com.br"
          color="primary"
          variant="contained"
          buttonSize="standard"
        >
          Hello
        </Button>
        <Button
          as="div"
          color="secondary"
          variant="contained"
          buttonSize="standard"
        >
          Hello
        </Button>
        <Button color="secondary" variant="contained" buttonSize="standard">
          Hello
        </Button>
        <Typography variant="lead1">Typography 1</Typography>
        <Typography variant="lead2">Typography 2</Typography>
        <Typography variant="body1">Typography 3</Typography>
        <Typography variant="body2">Typography 4</Typography>
        <Typography variant="caption">Typography 5</Typography>
        <Typography variant="subtitle">Typography 6</Typography>

        <Heading as="h1" variant="1">
          Heading 1
        </Heading>
        <Heading as="h2" variant="2">
          Heading 2
        </Heading>
        <Heading as="h3" variant="3">
          Heading 3
        </Heading>
        <Heading as="h4" variant="4">
          Heading 4
        </Heading>
        <Heading as="h5" variant="5">
          Heading 5
        </Heading>
        <Heading as="h6" variant="6">
          Heading 6
        </Heading>

        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button variant="contained" color="error">
              Delete account
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Portal>
            <AlertDialog.Overlay blur />
            <AlertDialog.Content>
              <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
              <AlertDialog.Description>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialog.Description>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>
                  <Button variant="contained" color="primary">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button variant="contained" color="error">
                    Yes, delete account
                  </Button>
                </AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog.Root>
      </Flex>
    </Container>
  );
}
