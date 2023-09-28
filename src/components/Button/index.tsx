interface buttonProps {
  styles: string;
  children: JSX.Element;
}

export function Button({ styles, children }: buttonProps) {
  return (
    <button className={`px-8 py-3 rounded flex gap-2 ${styles}`}>
      {children}
    </button>
  );
}
