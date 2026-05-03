import React from "react";

interface TabsProps {
  tabs: Array<{
    label: string;
    value: string;
    icon?: React.ReactNode;
  }>;
  activeTab: string;
  onTabChange: (value: string) => void;
  children?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  children,
}) => {
  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={`
              flex items-center whitespace-nowrap px-4 py-3 text-sm font-medium
              border-b-2 transition-all duration-200
              ${
                activeTab === tab.value
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }
            `}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
};
