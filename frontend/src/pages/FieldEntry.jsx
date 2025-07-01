// FieldEntry.jsx
import { Input, HStack, IconButton } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

const FieldEntry = ({ field, onChange, onRemove, fakerTypes }) => {
  return (
    <HStack spacing={4}>
      {/* Field Name Input */}
      <Input
        placeholder="Field name"
        value={field.name}
        onChange={(e) => onChange({ ...field, name: e.target.value })}
      />

      {/* Faker Type Input with Suggestions */}
      <Input
        placeholder="Start typing faker type"
        list="faker-type-list"
        value={field.type}
        onChange={(e) => onChange({ ...field, type: e.target.value })}
      />

      {/* Remove Button (with react-icon) */}
      <IconButton
        aria-label="Remove field"
        onClick={onRemove}
        size="sm"
        color={"white"}
        backgroundColor={"black"}
      >
        <FiX />
      </IconButton>

      {/* This should be rendered once per page ideally */}
      <datalist id="faker-type-list">
        {fakerTypes.map((t) => (
          <option key={t} value={t} />
        ))}
      </datalist>
    </HStack>
  );
};

export default FieldEntry;
