interface MyButtonProps {
  title: string;
  disabled: boolean;
}

export function MyButton({ title, disabled }: MyButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}
