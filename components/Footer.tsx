import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-beige-50 border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-4">E&L Studio</h3>
            <p className="text-gray-600 max-w-sm">
              Feminidad atemporal con actitud moderna. Descubre piezas elegantes y versátiles para la mujer contemporánea.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="p-2 hover:bg-beige-200 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-beige-200 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg mb-4">Tienda</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/shop" className="hover:text-black transition-colors">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link href="/shop?category=dresses" className="hover:text-black transition-colors">
                  Vestidos
                </Link>
              </li>
              <li>
                <Link href="/shop?category=blazers" className="hover:text-black transition-colors">
                  Blazers
                </Link>
              </li>
              <li>
                <Link href="/shop?category=essentials" className="hover:text-black transition-colors">
                  Esenciales
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-lg mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-black transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Devoluciones
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-beige-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} E&L Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
