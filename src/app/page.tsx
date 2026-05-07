import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <main style={{ padding: "100px 40px" }}>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: 96,
            fontWeight: 300,
            fontVariationSettings: "'opsz' 144, 'SOFT' 0",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Hallo{" "}
          <em style={{ color: "var(--pink)", fontStyle: "italic" }}>FFAS</em>.
        </h1>
        <Button href="#join" variant="primary">
          Mitspielen
        </Button>
        <Button href="#more" variant="ghost">
          Mehr erfahren
        </Button>
      </main>
      <Footer />
    </>
  );
}
