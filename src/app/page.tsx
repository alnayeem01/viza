
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-muted">
      <div className="p-10 rounded-xl shadow-lg bg-white w-full max-w-lg flex flex-col items-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Viza Ltd Color Test</h1>
        <p className="text-lg text-text mb-2">This section uses your custom Tailwind palette.</p>
        <button className="px-6 py-3 rounded-full bg-accent text-white font-semibold mb-2">Accent Button</button>
        <button className="px-6 py-3 rounded-full bg-whatsapp text-white font-semibold mb-2">WhatsApp Button</button>
        <div className="w-full h-4 rounded bg-gold mt-4" />
      </div>
    </div>
  );
}
