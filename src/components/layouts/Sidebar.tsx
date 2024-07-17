type SidebarProps = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="relative w-80 border-r border-slate-200">
      {children}
    </aside>
  );
};
export default Sidebar;
