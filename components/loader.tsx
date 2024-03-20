import Image from "next/image";

export default function Loader() {
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image src="/logo.png" alt="Loading..." fill />
      </div>
      <p className="text-sm text-muted-foreground">Sinthetic is thinking...</p>
    </div>
  );
}
