import Image from 'next/image';
import { Play, Truck, MapPin, ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';

export const HeroSection = () => (
  <section className=" min-h-screen relative overflow-hidden">
    <div className="absolute top-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-40 blur-3xl"></div>
    <div className="absolute bottom-40 left-20 w-40 h-40 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>

    <div className="container mx-auto px-6 py-20 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span>Açaí Saudável é </span>
            <span className="text-purple-600">uma Parte</span>
            <br />
            <span className="text-pink-500">Importante</span>
            <span> do seu</span>
            <br />
            <span>Estilo de Vida</span>
          </h1>

          <p className="text-lg max-w-md">
            Preparamos açaí delicioso e nutritivo para você. Sempre fresquinho e com os melhores ingredientes.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg cursor-pointer">
              Explorar Agora
            </button>
            <button className="bg-white hover:bg-gray-50 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all shadow-md cursor-pointer">
              <div className="bg-purple-600 rounded-full p-1">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              Ver Vídeo
            </button>
          </div>

          <div className="flex flex-col gap-4 pt-8">
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Truck className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Entrega Rápida</h3>
                <p className="text-sm">Receba seu açaí em até 30 minutos</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-pink-100 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold">Retirada no Local</h3>
                <p className="text-sm">Retire na loja sem fila de espera</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -right-4 bg-linear-to-br from-yellow-400 to-yellow-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center font-bold shadow-lg z-20 transform rotate-12">
            <span className="text-2xl">20%</span>
            <span className="text-xs">OFF</span>
          </div>

          <div className="relative">
            <Image
              src="/images/main.png"
              alt="Açaí Bowl Delicioso"
              width={400}
              height={400}
              className="w-full h-auto" />
          </div>

          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-linear-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
        </div>
      </div>

      <div className="mt-20 relative w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 mx-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Nossos Sabores
            </h2>
            <p className="text-gray-600">Escolha seu açaí favorito</p>
          </div>

          <div className="hidden xl:flex items-center justify-center gap-4 max-w-7xl mx-auto">
            <button
              className="cursor-pointer bg-linear-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full p-3 shadow-lg shrink-0 transition-all hover:scale-110 active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-6 overflow-hidden">
              {[
                { name: 'Açaí Tradicional', price: 'R$15,00', color: 'from-purple-500 to-purple-600', tag: 'Clássico' },
                { name: 'Açaí Premium', price: 'R$20,00', color: 'from-pink-500 to-pink-600', tag: 'Popular' },
                { name: 'Açaí Fitness', price: 'R$18,00', color: 'from-green-500 to-green-600', tag: 'Saudável' },
                { name: 'Açaí Especial', price: 'R$22,00', color: 'from-blue-500 to-blue-600', tag: 'Premium' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-6 w-56 shrink-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200"
                >
                  <div className={`absolute top-4 right-4 bg-linear-to-r ${item.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-1000 transition-all duration-300 group-hover:scale-105`}>
                    {item.tag}
                  </div>

                  <div className={`bg-linear-to-br ${item.color} rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Image
                      src="/images/product.webp"
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <h3 className="font-bold text-lg text-center text-gray-800 mb-1">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                  </div>

                  <p className="text-3xl font-bold text-center bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    {item.price}
                  </p>

                  <button className={`cursor-pointer bg-linear-to-r ${item.color} hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold w-full transition-all flex items-center justify-center cursor-pointer gap-2 shadow-md hover:shadow-lg group-hover:scale-105`}>
                    Pedir Agora
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <button
              className="bg-linear-to-br cursor-pointer from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-full p-3 shadow-lg shrink-0 transition-all hover:scale-110 active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Açaí Tradicional', price: 'R$15,00', color: 'from-purple-500 to-purple-600', tag: 'Clássico' },
              { name: 'Açaí Premium', price: 'R$20,00', color: 'from-pink-500 to-pink-600', tag: 'Popular' },
              { name: 'Açaí Fitness', price: 'R$18,00', color: 'from-green-500 to-green-600', tag: 'Saudável' },
              { name: 'Açaí Especial', price: 'R$22,00', color: 'from-blue-500 to-blue-600', tag: 'Premium' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl active:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-purple-200 active:border-purple-200"
              >
                <div className={`absolute top-4 right-4 bg-linear-to-r ${item.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-1000`}>
                  {item.tag}
                </div>

                <div className={`bg-linear-to-br ${item.color} rounded-full w-32 h-32 mx-auto mb-4 flex items-center justify-center overflow-hidden shadow-xl group-hover:scale-110 group-active:scale-110 transition-transform duration-300`}>
                  <Image
                    src="/images/product.webp"
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h3 className="font-bold text-lg text-center text-gray-800 mb-1">
                  {item.name}
                </h3>

                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                </div>

                <p className="text-3xl font-bold text-center bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  {item.price}
                </p>

                <button className={`bg-linear-to-r ${item.color} hover:opacity-90 active:opacity-90 text-white px-6 py-3 rounded-full font-semibold w-full transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:shadow-lg group-hover:scale-105 group-active:scale-105`}>
                  Pedir Agora
                  <ShoppingCart className="w-4 h-6" />
                </button>
              </div>
            ))}
          </div>

          <div className="hidden xl:flex justify-center gap-2 mt-6">
            {[...Array(4)].map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all ${i === 0 ? 'w-8 bg-purple-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Ir para grupo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);