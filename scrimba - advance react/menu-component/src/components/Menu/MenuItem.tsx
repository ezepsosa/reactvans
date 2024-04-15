export default function MenuItem({ children }: { children: string }) {
  return (
    <div className="menu-item" key={children}>
      {children}
    </div>
  );
}
