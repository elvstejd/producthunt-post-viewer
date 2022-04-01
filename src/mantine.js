import { Global, MantineProvider } from "@mantine/core";

const colors = {
  gray: [
    "#F9FAFB",
    "#F3F4F6",
    "#E5E7EB",
    "#D1D5DB",
    "#9CA3AF",
    "#6B7280",
    "#4B5563",
    "#374151",
    "#1F2937",
    "#111827"
  ],
  red: [
    "#FEF2F2",
    "#FEE2E2",
    "#FECACA",
    "#FCA5A5",
    "#F87171",
    "#EF4444",
    "#DC2626",
    "#B91C1C",
    "#991B1B",
    "#7F1D1D"
  ],
  pink: [
    "#FDF2F8",
    "#FCE7F3",
    "#FBCFE8",
    "#F9A8D4",
    "#F472B6",
    "#EC4899",
    "#DB2777",
    "#BE185D",
    "#9D174D",
    "#831843"
  ],
  grape: [
    "#FDF4FF",
    "#FAE8FF",
    "#F5D0FE",
    "#F0ABFC",
    "#E879F9",
    "#D946EF",
    "#C026D3",
    "#A21CAF",
    "#86198F",
    "#701A75"
  ],
  violet: [
    "#F5F3FF",
    "#EDE9FE",
    "#DDD6FE",
    "#C4B5FD",
    "#A78BFA",
    "#8B5CF6",
    "#7C3AED",
    "#6D28D9",
    "#5B21B6",
    "#4C1D95"
  ],
  indigo: [
    "#EEF2FF",
    "#E0E7FF",
    "#C7D2FE",
    "#A5B4FC",
    "#818CF8",
    "#6366F1",
    "#4F46E5",
    "#4338CA",
    "#3730A3",
    "#312E81"
  ],
  blue: [
    "#EFF6FF",
    "#DBEAFE",
    "#BFDBFE",
    "#93C5FD",
    "#60A5FA",
    "#3B82F6",
    "#2563EB",
    "#1D4ED8",
    "#1E40AF",
    "#1E3A8A"
  ],
  cyan: [
    "#ECFEFF",
    "#CFFAFE",
    "#A5F3FC",
    "#67E8F9",
    "#22D3EE",
    "#06B6D4",
    "#0891B2",
    "#0E7490",
    "#155E75",
    "#164E63"
  ],
  teal: [
    "#F0FDFA",
    "#CCFBF1",
    "#99F6E4",
    "#5EEAD4",
    "#2DD4BF",
    "#14B8A6",
    "#0D9488",
    "#0F766E",
    "#115E59",
    "#134E4A"
  ],
  green: [
    "#F0FDF4",
    "#DCFCE7",
    "#BBF7D0",
    "#86EFAC",
    "#4ADE80",
    "#22C55E",
    "#16A34A",
    "#15803D",
    "#166534",
    "#14532D"
  ],
  lime: [
    "#F7FEE7",
    "#ECFCCB",
    "#D9F99D",
    "#BEF264",
    "#A3E635",
    "#84CC16",
    "#65A30D",
    "#4D7C0F",
    "#3F6212",
    "#365314"
  ],
  yellow: [
    "#FEFCE8",
    "#FEF9C3",
    "#FEF08A",
    "#FDE047",
    "#FACC15",
    "#EAB308",
    "#CA8A04",
    "#A16207",
    "#854D0E",
    "#713F12"
  ],
  orange: [
    "#FFF7ED",
    "#FFEDD5",
    "#FED7AA",
    "#FDBA74",
    "#FB923C",
    "#F97316",
    "#EA580C",
    "#C2410C",
    "#9A3412",
    "#7C2D12"
  ]
};

export function Mantine({ children }) {
  return (
    <MantineProvider
      theme={{
        colors,
        fontFamily: "Inter, sans-serif",
        defaultRadius: "md",
        headings: {
          fontFamily: "Inter, sans-serif"
        }
      }}
    >
      {children}
      <Global
        styles={{
          button: {
            fontWeight: "500 !important"
          }
        }}
      />
    </MantineProvider>
  );
}
