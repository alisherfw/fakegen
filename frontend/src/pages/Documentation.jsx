// src/pages/Documentation.jsx
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Code,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useRef } from 'react';

const CodeBlock = ({ children }) => (
  <Box
    color="white"
    p={4}
    borderRadius="md"
    overflowX="auto"
    fontSize="sm"
    my={2}
    bg="gray.800"
  >
    <Code whiteSpace="pre">{children}</Code>
  </Box>
);

const Section = ({ id, title, children }) => (
  <Box id={id} mb={12}>
    <Heading size="lg" mb={4} color="teal.400">{title}</Heading>
    {children}
  </Box>
);

export default function Documentation() {
  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation & Setup' },
    { id: 'endpoints', title: 'REST API Endpoints' },
    { id: 'custom-schema', title: 'Custom Schema Guide' },
    { id: 'builder', title: 'Builder UI' },
    { id: 'usage', title: 'Axios & Fetch Usage' },
    { id: 'roadmap', title: 'Roadmap' },
    { id: 'license', title: 'License' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Flex direction={{ base: 'column', md: 'row' }} p={8}>
      {/* Sidebar */}
      <Box
        minW="220px"
        mr={8}
        mb={{ base: 8, md: 0 }}
        position={{ md: 'sticky' }}
        top="10px"
        alignSelf="flex-start"
        maxH="80vh"
        overflowY="auto"
      >
        <img src="/src/assets/image.png" alt="logo" width={75} />
        <VStack align="start" spacing={3} mt={4}>
          {sections.map(({ id, title }) => (
            <Link
              key={id}
              onClick={() => scrollTo(id)}
              fontWeight="medium"
              color="gray.200"
              _hover={{ textDecoration: 'underline', color: 'teal.400' }}
              cursor="pointer"
            >
              {title}
            </Link>
          ))}
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" maxW="800px">
        <Section id="overview" title="Overview">
          <Text>
            FakeGen is a REST-based fake data API that helps developers quickly generate realistic
            mock data for testing, prototyping, and front-end development. It works out-of-the-box —
            no installation, no database, and no authentication required.
          </Text>
          <Text mt={2}>
            Use FakeGen to simulate realistic JSON APIs with different entities like users,
            companies, books, or define your own schema with <Code color="teal.400">Faker.js</Code> syntax. Ideal for frontend
            engineers, students, and rapid UI testing.
          </Text>
        </Section>

        <Section id="installation" title="Installation & Setup">
          <Text>No installation is required. Just call the public API endpoint:</Text>
          <CodeBlock>{`GET https://fakegen.alisherfw.me/generate/user`}</CodeBlock>
        </Section>

        <Section id="endpoints" title="REST API Endpoints">
          <Text>Available GET endpoints:</Text>
          <VStack align="start" mt={2}>
            <Code>/generate/user</Code>
            <Code>/generate/book</Code>
            <Code>/generate/job</Code>
            <Code>/generate/company</Code>
            <Code>/generate/article</Code>
          </VStack>

          <Text mt={4}><strong>Optional query:</strong></Text>
          <CodeBlock>{`GET /generate/user?count=5`}</CodeBlock>

          <Text mt={2}>Returns an array of 5 fake user objects.</Text>

          <Text mt={4}><strong>Example response:</strong></Text>
          <CodeBlock>{`[
  {
    "id": "e7d1-bf92...",
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "address": "123 Oak Avenue"
  },
  ...
]`}</CodeBlock>
        </Section>

        <Section id="custom-schema" title="Custom Schema Guide">
          <Text>
            You can define a fully custom schema using a POST request. Use any valid <Code color="teal.400">Faker.js</Code> method path.
          </Text>
          <Text mt={2}>Example:</Text>
          <CodeBlock>{`POST /generate
{
  "schema": {
    "userId": "datatype.uuid",
    "name": "name.fullName",
    "email": "internet.email",
    "age": "datatype.number",
    "isAdmin": "datatype.boolean"
  },
  "count": 3
}`}</CodeBlock>

          <Text mt={2}>
            ✅ Supports <Link href="https://fakerjs.dev/api" isExternal color="teal.400">Faker.js API paths</Link> like <Code color="teal.400">name.fullName</Code>, <Code color="teal.400">internet.email</Code>, <Code color="teal.400">company.name</Code>, etc.
          </Text>

          <Text mt={2}>
            ⚠️ Nested objects and arrays coming soon.
          </Text>
        </Section>

        <Section id="builder" title="Builder UI">
          <Text>
            Prefer a UI instead of writing raw JSON? Visit the visual schema builder at{' '}
            <Link href="https://fakegen.alisherfw.me/builder" isExternal color="teal.400">
              /builder
            </Link>{' '}
            to create your schema and copy ready-made Axios/Fetch code.
          </Text>
        </Section>

        <Section id="usage" title="Axios & Fetch Usage">
          <Text fontWeight="bold">Axios:</Text>
          <CodeBlock>{`import axios from 'axios';
const res = await axios.get('https://fakegen.alisherfw.me/generate/user');
console.log(res.data);`}</CodeBlock>

          <Text fontWeight="bold" mt={4}>Fetch:</Text>
          <CodeBlock>{`fetch('https://fakegen.alisherfw.me/generate/user')
  .then(res => res.json())
  .then(data => console.log(data));`}</CodeBlock>
        </Section>

        <Section id="roadmap" title="Roadmap">
          <Text>Planned features:</Text>
          <VStack align="start" mt={2}>
            <Text>• Nested object and array support</Text>
            <Text>• Schema saving & sharing</Text>
            <Text>• CLI & NPM SDK support</Text>
            <Text>• Download as JSON/CSV</Text>
            <Text>• Auth & usage limits</Text>
          </VStack>
        </Section>

        <Section id="license" title="License">
          <Text>
            This project is released under the MIT License — free for personal and commercial use.
          </Text>
        </Section>
      </Box>
    </Flex>
  );
}
