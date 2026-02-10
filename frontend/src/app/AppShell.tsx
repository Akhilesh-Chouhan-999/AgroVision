import { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 text-center font-bold">
        KisanRakshak Pro
      </header>

      {/* Main content */}
      <main className="p-4">{children}</main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 p-2">
        © 2026 KisanRakshak
      </footer>
    </div>
  );
};

export default AppShell;
