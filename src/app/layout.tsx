// Based on example:
// https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts
// Accessed 2023-08-08.

import * as React from "react";

import RootLayout from "@/components/RootLayout";
import { appStoreInitialData } from "@/stores/AppStoreInitialData";

// TODO: Pull course title from a configuration
export const metadata = {
  title: "CSE703016 - Introduction to HCI - S1 2024",
  description: "CSE703016 - Introduction to HCI - S1 2024",
};

interface LayoutProps extends React.PropsWithChildren<{}> {
  sidebar: React.ReactElement;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  const initialData = appStoreInitialData();

  return (
    <RootLayout sidebar={sidebar} initialData={initialData}>
      {children}
    </RootLayout>
  );
}
