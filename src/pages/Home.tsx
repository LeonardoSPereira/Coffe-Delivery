import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Background } from '../assets/Background'
import { BannerImg } from '../assets/BannerImg'
import { Header } from '../components/Header'
import { Product } from '../components/Product'
import { productsInfo } from '../data/productsInfo'

export function Home() {
  return (
    <div>
      <Header />

      <main className="w-screen overflow-hidden px-40 py-24">
        <section className="w-full">
          <Background />

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base-title font-baloo font-extrabold text-3xl leading-10 mb-['1px']">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-base-subtitle text-xl leading-6">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>

              <div className="w-auto mt-14 flex items-center flex-wrap gap-5">
                <p className="flex items-center justify-center gap-3">
                  <ShoppingCart
                    size={24}
                    weight="fill"
                    className="p-2 size-9 rounded-full bg-yellow-dark text-background"
                  />
                  <span>Compra simples e segura</span>
                </p>

                <p className="flex items-center justify-center gap-3">
                  <Package
                    size={24}
                    weight="fill"
                    className="p-2 size-9 rounded-full bg-base-text text-background"
                  />
                  <span>Embalagem mantém o café intacto</span>
                </p>

                <p className="flex items-center justify-center gap-3">
                  <Timer
                    size={24}
                    weight="fill"
                    className="p-2 size-9 rounded-full bg-yellow text-background"
                  />
                  <span>Entrega rápida e rastreada</span>
                </p>

                <p className="flex items-center justify-center gap-3">
                  <Coffee
                    size={24}
                    weight="fill"
                    className="p-2 size-9 rounded-full bg-purple text-background"
                  />
                  <span>O café chega fresquinho até você</span>
                </p>
              </div>
            </div>
            <BannerImg />
          </div>
        </section>

        <section>
          <h2 className="text-base-subtitle font-baloo text-4xl font-extrabold mb-14">
            Nossos cafés
          </h2>

          <div className="flex items-center flex-wrap gap-8">
            {productsInfo.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
