export const ownershipFormValues = {
  IP: "ИП",
  OOO: "ООО",
} as const;

export const ownershipForms = [
  {
    value: ownershipFormValues.IP,
    label: "Индивидуальный предприниматель (ИП)",
  },
  {
    value: ownershipFormValues.OOO,
    label: "Общество с ограниченной ответственностью (ООО)",
  },
];
