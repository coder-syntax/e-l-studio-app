"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import { notFound } from "next/navigation";
import type { Product } from "@/types";

interface ProductContentProps {
  product: Product;
}

export default function ProductContent({ product }: ProductContentProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    addItem(product, selectedSize);
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-black">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-black">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-[3/4] bg-gray-100 overflow-hidden"
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-[3/4] bg-gray-100 overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-black"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl mb-2">{product.name}</h1>
              <p className="text-2xl font-light">${product.price}</p>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium uppercase tracking-wider">
                  Seleccionar talla
                </label>
                <button className="text-sm underline hover:no-underline">
                  Guía de tallas
                </button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border-2 py-3 text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              disabled={!selectedSize || isAdded}
              whileTap={{ scale: selectedSize ? 0.98 : 1 }}
              className={`w-full py-4 text-white font-medium tracking-wider transition-colors flex items-center justify-center gap-2 ${
                !selectedSize
                  ? "bg-gray-300 cursor-not-allowed"
                  : isAdded
                  ? "bg-green-600"
                  : "bg-black hover:bg-gray-800"
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Agregado al carrito</span>
                </>
              ) : (
                <span>{selectedSize ? "Agregar al carrito" : "Selecciona una talla"}</span>
              )}
            </motion.button>

            {/* Product Details */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-medium">Descripción</span>
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-medium">Envíos y devoluciones</span>
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <div className="mt-4 text-sm text-gray-600 space-y-2">
                  <p>Envío gratuito en pedidos superiores a $200</p>
                  <p>Entrega estándar: 5-7 días hábiles</p>
                  <p>Devoluciones fáciles dentro de 30 días</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-medium">Instrucciones de cuidado</span>
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <div className="mt-4 text-sm text-gray-600 space-y-2">
                  <p>Solo limpieza en seco</p>
                  <p>No usar blanqueador</p>
                  <p>Planchar a baja temperatura</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-serif text-3xl mb-8 text-center">También te podría gustar</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-100">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-medium mb-1 group-hover:underline">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-600">${relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
