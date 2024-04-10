import Background from "@/components/background";
import Header from "@/components/header";

export default function Layout({ children }) {
  return (
    <>
      <Background />
      <Header />
      <main>{children}</main>
    </>
  );
}
