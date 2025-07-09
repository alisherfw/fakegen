import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Container,
    Heading,
    Stack,
    Text,
    Flex,
    SimpleGrid,
    Code,
    HStack,
    Grid,
    GridItem,
    Link as ChakraLink,
    Tabs,
    Separator
} from "@chakra-ui/react";
import { Tabs as TabsV3 } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/image.png";


const Landing = () => {
    const bg = "gray.900";
    const cardBg = "#1b1b1f";
    const text = "gray.400";

    const messages = [
        "Generate fake APIs tailored to your frontend.",
        "Customize your schema visually or via JSON.",
        "Skip mock servers. Use real fake data."
    ];
    const [messageIndex, setMessageIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        let currentMessage = messages[messageIndex];
        const typing = setInterval(() => {
            setDisplayedText(currentMessage.slice(0, i));
            i++;
            if (i > currentMessage.length) clearInterval(typing);
        }, 30);
        const delay = setTimeout(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 5000);
        return () => {
            clearInterval(typing);
            clearTimeout(delay);
        };
    }, [messageIndex]);

    return (
        <Box bg={bg} color="white">
            {/* Navbar */}
            <Box
                position="sticky"
                top={0}
                zIndex={100}
                bg={bg}
                // borderBottom="1px solid"
                borderColor="blue.300"
                px={4}
            >
                <Flex justify="space-between" align="center" maxW="6xl" mx="auto">
                    <Flex alignItems="center">
                        <img src={heroImg} alt="logo" width={75} />
                    </Flex>
                    <HStack spacing={4}>
                        <Button as={Link} to="/builder" variant="ghost" size="sm">
                            Builder
                        </Button>
                        <Button as={Link} to="/documentation" colorScheme="teal" size="sm">
                            Documentation
                        </Button>
                    </HStack>
                </Flex>
            </Box>

            {/* Hero */}
            <Container maxW="6xl" py={20}>
                <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={10}>
                    <Box flex="1">
                        <Heading size="6xl" fontWeight="bold" mb={4} color="teal.300">
                            FakeGen
                        </Heading>
                        <Text fontSize="2xl" color="gray.400" mb={8} minH="40px">
                            {displayedText}
                        </Text>
                        <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
                            <Button colorScheme="teal" size="lg" as={Link} to="/documentation">
                                Get Started
                            </Button>
                            <Button variant="ghost" size="lg" as="a" href="https://github.com/alisherfw/fakegen" target="_blank">
                                GitHub
                            </Button>
                        </Stack>
                    </Box>
                    <Box flex="1" display="flex" justifyContent="center">
                        <Box maxW="350px">
                            <img src={heroImg} alt="Mascot" style={{ width: "100%", height: "auto" }} />
                        </Box>
                    </Box>
                </Flex>
            </Container>

            {/* Code + Response using Tabs v3 */}
            {/* <Container maxW="6xl" py={16}>
                <Heading fontSize={"3xl"} mb={5}>
                    Example
                </Heading>
                <Tabs.Root defaultValue="request">
                    <Tabs.List>
                        <Tabs.Trigger backgroundColor={bg} value="request">Request</Tabs.Trigger>
                        <Tabs.Trigger backgroundColor={bg} value="response">Response</Tabs.Trigger>
                        <Tabs.Indicator />
                    </Tabs.List>
                    <Tabs.Content value="request">
                        <Box bg={cardBg} borderRadius="md" p={1} border="1px solid" borderColor="gray.700" fontFamily="mono">
                            <Code whiteSpace="pre-wrap" display="block" fontSize="sm" color="green.300">
{`fetch("https://fakegen.alisherfw.me/api/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    count: 3,
    schema: {
      id: "datatype.uuid",
      name: "name.findName",
      email: "internet.email",
      address: {
        street: "address.streetAddress",
        city: "address.city",
        zip: "address.zipCode"
      },
      registeredAt: "date.past"
    }
  })
})
  .then(res => res.json())
  .then(data => console.log(data));`}
                            </Code>
                        </Box>
                    </Tabs.Content>
                    <Tabs.Content value="response">
                        <Box bg={cardBg} borderRadius="md" p={1} border="1px solid" borderColor="gray.700" fontFamily="mono">
                            <Code whiteSpace="pre-wrap" display="block" fontSize="sm" color="blue.300">
{`[
  {
    "id": "6a9f10f7-bec3-42fc-83e5-13d7f71f5b2e",
    "name": "Clara Schmidt",
    "email": "clara.schmidt@example.com",
    "address": {
      "street": "789 Market Street",
      "city": "Newark",
      "zip": "07102"
    },
    "registeredAt": "2021-06-12T14:45:22.123Z"
  },
  ...
]`}
                            </Code>
                        </Box>
                    </Tabs.Content>
                </Tabs.Root>
            </Container> */}

            {/* Features */}
            <Container maxW="6xl" py={20}>
                <Heading size="3xl" mb={10} textAlign="center">
                    What makes FakeGen different?
                </Heading>
                <SimpleGrid minChildWidth="260px" >
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            bg={cardBg}
                            p={6}
                            borderRadius="md"
                            border="1px solid"
                            borderColor="gray.900"
                            shadow="sm"
                            // _hover={{ shadow: "md", transform: "translateY(-2px)" }}
                            transition="all 0.2s ease"
                            minH={260}
                            ml={5}
                            mt={5}
                        >
                            <Heading size="xl" mb={2} color="teal.300">
                                {feature.icon} {feature.title}
                            </Heading>
                            <Text fontSize="md" color={text}>
                                {feature.description}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>

            {/* CTA */}
            <Container maxW="4xl" py={24} textAlign="center">
                <Heading size="md" mb={4}>Build, test, and ship faster.</Heading>
                <Text mb={6} color={text}>
                    FakeGen gives you the fake API you wish you always had. Try it now — no login, no setup.
                </Text>
                <Button as={Link} to="/builder" colorScheme="teal" size="lg">
                    Get Started
                </Button>
            </Container>

            {/* Footer */}
            <Box bg="gray.800" py={8} px={6}>
                <Flex maxW="6xl" mx="auto" justify="space-between" direction={{ base: "column", md: "row" }} gap={4}>
                    <Text fontSize="sm" color="gray.500">
                        © {new Date().getFullYear()} FakeGen. MIT License.
                    </Text>
                    <HStack spacing={6}>
                        <ChakraLink href="/privacy" fontSize="sm" color="gray.400">Privacy</ChakraLink>
                        <ChakraLink href="/terms" fontSize="sm" color="gray.400">Terms</ChakraLink>
                        <ChakraLink href="https://github.com/alisherfw/fakegen" fontSize="sm" color="gray.400" isExternal>
                            GitHub
                        </ChakraLink>
                    </HStack>
                </Flex>
            </Box>
        </Box>
    );
};


const features = [
    {
        icon: "🛠️",
        title: "Fully Customizable Schemas",
        description: "Define fields, types, formats, and nesting. Build data structures that fit your app — not the other way around.",
    },
    {
        icon: "🔄",
        title: "Dynamic Data Simulation",
        description: "Preview realistic responses with variability — every call returns fresh, schema-compliant content.",
    },
    {
        icon: "⚡",
        title: "Instant REST API",
        description: "Get a working endpoint for any schema in seconds. Just copy and go.",
    },
    {
        icon: "🧱",
        title: "Schema Builder",
        description: "Use our visual tool to create your own fake data models without code.",
    },
    {
        icon: "🧠",
        title: "Smart Defaults",
        description: "Start with pre-made types like user, address, article, or device.",
    },
    {
        icon: "📦",
        title: "Flexible Output",
        description: "JSON API or raw values — choose the format you need.",
    },
    {
        icon: "💻",
        title: "CLI & REST Access",
        description: "Use it from the web or integrate into your dev workflow locally.",
    },
    {
        icon: "🎯",
        title: "Developer First",
        description: "Built for frontend speed. No auth, no DB, just mock & ship.",
    },
];

export default Landing;
