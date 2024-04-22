import { MapPinLine } from 'phosphor-react'
import { Header } from '../components/Header'
import { useCart } from '../contexts/CartContext'
import { useState } from 'react'

export function Checkout() {
  const { cart } = useCart()
  const [cep, setCep] = useState('')
  console.log(cart)

  function handleCepChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value

    const digitsOnly = inputValue.replace(/\D/g, '')

    const formattedCepValue = digitsOnly.replace(/^(\d{5})(\d{3})$/, '$1-$2')

    setCep(formattedCepValue)
  }

  return (
    <div>
      <Header />

      <main className="w-screen overflow-hidden px-40 py-24">
        <section>
          <h2 className="text-base-subtitle font-baloo text-lg font-bold mb-4">
            Complete seu pedido
          </h2>
          <form className="flex flex-col items-start justify-center gap-4 p-10 rounded-md bg-base-card">
            <div className="flex items-start gap-2 mb-4">
              <MapPinLine size={24} className="text-yellow-dark" />
              <div className="flex flex-col">
                <h3 className="text-base-subtitle">Endereço de entrega</h3>
                <p className="text-base-text text-sm">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>

            <input
              className="p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-none"
              type="text"
              placeholder="CEP"
              maxLength={9}
              value={cep}
              onChange={handleCepChange}
            />
            <input
              className="w-full p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-none"
              type="text"
              placeholder="Rua"
            />

            <div className="w-full flex items-center gap-3">
              <input
                className="p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-none"
                type="number"
                min={0}
                placeholder="Número"
              />
              <div className="flex w-full items-center justify-between p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-none">
                <input
                  className="bg-base-input text-sm text-base-text placeholder-base-label focus:outline-none"
                  type="text"
                  placeholder="Complemento"
                />
                <span className="text-base-label text-xs italic">Opcional</span>
              </div>
            </div>

            <div className="w-full flex gap-2 item justify-around">
              <input
                className="w-48 p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-none"
                type="text"
                placeholder="Bairro"
              />
              <input
                className="w-full p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-none"
                type="text"
                placeholder="Cidade"
              />
              <input
                className="w-14 p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-none"
                type="text"
                max={2}
                placeholder="UF"
              />
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}
