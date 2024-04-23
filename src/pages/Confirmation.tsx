import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { ConfirmationBanner } from '../assets/ConfirmationBanner'
import { Header } from '../components/Header'
import { useCart } from '../contexts/CartContext'

export function Confirmation() {
  const { cart } = useCart()

  let paymentMethod = ''

  if (cart.paymentMethod === 'credit') {
    paymentMethod = 'Cartão de crédito'
  } else if (cart.paymentMethod === 'debit') {
    paymentMethod = 'Cartão de débito'
  } else if (cart.paymentMethod === 'cash') {
    paymentMethod = 'Dinheiro'
  }

  return (
    <div>
      <Header />

      <main className="w-screen flex flex-col items-start justify-center px-40 py-24">
        <h1 className="font-baloo text-yellow-dark text-4xl font-extrabold">
          Uhu! Pedido confirmado
        </h1>

        <p className="text-base-subtitle text-xl mb-10">
          Agora é só aguardar que logo o café chegará até você
        </p>

        <div className="w-full flex gap-8 items-center justify-between">
          <div className="p-0.5 rounded-md border bg-gradient-to-r from-yellow to-purple">
            <div className="p-10 w-full h-full bg-background flex flex-col gap-3 justify-center">
              <div className="flex items-center gap-3">
                <div className="bg-purple p-2 rounded-full text-white">
                  <MapPin size={24} weight="fill" />
                </div>

                <p>
                  Entrega em{' '}
                  <strong>{`${cart.address.street}, ${cart.address.number}`}</strong>
                  <br />
                  {`${cart.address.neighborhood} - ${cart.address.city}, ${cart.address.uf}`}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-yellow p-2 rounded-full text-white">
                  <Timer weight="fill" size={24} />
                </div>

                <p>
                  Previsão de entrega <br /> <strong>20min - 30min</strong>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-yellow-dark p-2 rounded-full text-white">
                  <CurrencyDollar size={24} />
                </div>

                <p>
                  Pagamento na entrega <br /> <strong>{paymentMethod}</strong>
                </p>
              </div>
            </div>
          </div>
          <ConfirmationBanner />
        </div>
      </main>
    </div>
  )
}
