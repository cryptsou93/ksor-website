import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <div className="text-8xl font-black text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-400 mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="btn-primary">
            <Home size={18} />
            Accueil
          </Link>
          <Link href="/contact" className="btn-outline">
            <ArrowLeft size={18} />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
