import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "sonner";
import UseMousePointer from "@/utils/MouseCursorUtilis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
       
       
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />
        </head>

        <body suppressHydrationWarning={true}>
          {/* Use the UseMousePointer component */}
            <UseMousePointer />
          <ReduxProvider>
            <AppProvider>
              {children}
            </AppProvider>
             <Toaster position="top-center" richColors/>
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
