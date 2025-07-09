// Builder.jsx
import { useState } from "react";
import {
    Box,
    Flex,
    Link,
    Button,
    Heading,
    Input,
    Stack,
    HStack,
    Text,
    RadioGroup
} from "@chakra-ui/react";
import FieldEntry from "./FieldEntry";

import { fakerTypes } from "./fakerTypes";
import heroImg from "@/assets/image.png";

export default function Builder() {
    const [fields, setFields] = useState([{ name: "", type: "" }]);
    const [count, setCount] = useState(5);
    const [response, setResponse] = useState(null);
    const [codeType, setCodeType] = useState("axios");

    const handleFieldChange = (updatedField, index) => {
        const newFields = [...fields];
        newFields[index] = updatedField;
        setFields(newFields);
    };

    const handleAddField = () => {
        setFields([...fields, { name: "", type: "" }]);
    };

    const handleRemoveField = (index) => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
    };

    const buildSchemaObject = () => {
        const obj = {};
        fields.forEach((f) => {
            if (f.name.trim() && fakerTypes.includes(f.type)) {
                obj[f.name.trim()] = f.type.trim();
            }
        });
        return obj;
    };

    const generateCodeSnippet = () => {
        const schema = buildSchemaObject();
        const endpoint = "https://fakegen.alisherfw.me/generate";

        if (codeType === "axios") {
            return `
import axios from "axios";

const response = await axios.post("${endpoint}", {
  count: ${count},
  schema: ${JSON.stringify(schema, null, 2)}
});

// const data = response.data;
      `.trim();
        } else {
            return `
const response = await fetch("${endpoint}", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    count: ${count},
    schema: ${JSON.stringify(schema, null, 2)}
  })
});
const data = await response.json();
      `.trim();
        }
    };

    const handleGenerate = () => {
        const schema = buildSchemaObject();

        if (Object.keys(schema).length === 0) {
            alert("No valid fields to send.");
            return;
        }

        const mockResponse = Array(count).fill(0).map(() => {
            const obj = {};
            Object.entries(schema).forEach(([key, val]) => {
                obj[key] = `[${val}]`;
            });
            return obj;
        });

        setResponse(mockResponse);
    };

    return (
        <Box maxW="1000px" mx="auto" p={8}>
            <Box
                position="sticky"
                top={0}
                zIndex={100}
                // bg={bg}
                // borderBottom="1px solid"
                borderColor="blue.300"
                px={4}
            >
                <Flex justify="space-between" align="center" maxW="6xl" mx="auto">
                    <Flex alignItems="center" as={"a"} href="/">
                        <img src={heroImg} alt="logo" width={75} />
                    </Flex>
                    <HStack spacing={4}>
                        <Button as="a" target={"_blank"} href="https://github.com/alisherfw/fakegen" colorScheme="teal" size="sm">
                            Github
                        </Button>
                    </HStack>
                </Flex>
            </Box>
            <Heading size="lg" mb={6}>FakeGen Builder</Heading>

            {/* Schema Controls */}
            <Heading>
                Fields
            </Heading>
            <Stack spacing={4}>
                {fields.map((field, index) => (
                    <FieldEntry
                        key={index}
                        field={field}
                        fakerTypes={fakerTypes}
                        onChange={(updated) => handleFieldChange(updated, index)}
                        onRemove={() => handleRemoveField(index)}
                    />
                ))}

                <Button onClick={handleAddField} colorScheme="blue">+ Add Field</Button>

                <Heading>
                    Count
                </Heading>
                <Input
                    type="number"
                    value={count}
                    min={1}
                    max={1000}
                    onChange={(e) => setCount(parseInt(e.target.value))}
                    placeholder="Number of results"
                />

                <RadioGroup.Root onChange={setCodeType} value={codeType}>
                    <HStack spacing={6}>
                        <RadioGroup.Item key="axios" value="axios">Axios</RadioGroup.Item>
                        <RadioGroup.Item value="fetch">Fetch</RadioGroup.Item>
                    </HStack>
                </RadioGroup.Root>

                <Button colorScheme="green" onClick={handleGenerate}>
                    Generate
                </Button>
            </Stack>

            {/* Request/Response Split */}
            <HStack spacing={6} align="start" mt={10}>
                <Box flex={1} p={4} borderWidth="1px" borderRadius="md" >
                    <Text fontWeight="bold" mb={2}>📤 API Request Code ({codeType})</Text>
                    <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                        {generateCodeSnippet()}
                    </pre>
                </Box>

                <Box flex={1} p={4} borderWidth="1px" borderRadius="md">
                    <Text fontWeight="bold" mb={2}>📥 Response Preview</Text>
                    <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                        {response ? JSON.stringify(response, null, 2) : "// No response yet"}
                    </pre>
                </Box>
            </HStack>
        </Box>
    );
}
