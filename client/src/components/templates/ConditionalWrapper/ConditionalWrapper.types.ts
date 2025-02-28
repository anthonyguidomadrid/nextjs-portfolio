export type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: React.ElementType;
  wrapperProps?: Record<string, unknown>;
  children: React.ReactNode;
};
