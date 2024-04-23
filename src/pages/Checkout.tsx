import { ChangeEvent, useEffect, useState } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Header } from '../components/Header'
import { useCart } from '../contexts/CartContext'
import { ProductItem } from '../components/ProductItem'
import { Separator } from '../components/Separator'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

interface AddressProps {
  zip: string
  street: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

export function Checkout() {
  const { cart, changePaymentMethod, addAddressToCart } = useCart()

  const [address, setAddress] = useState<AddressProps>({
    zip: '',
    street: '',
    number: 0,
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
  })

  const [totalPriceFromProductsInCart, setTotalPriceFromProductsInCart] =
    useState(0)
  const [totalPriceFromDelivery] = useState(3.5)
  const [totalPriceFromOrder, setTotalPriceFromOrder] = useState(0)

  const [paymentMethod, setPaymentMethod] = useState<
    'credit' | 'debit' | 'cash' | ''
  >('')

  const navigate = useNavigate()

  function handleAddressChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    if (name === 'zip') {
      const digitsOnly = value.replace(/\D/g, '')

      const formattedCepValue = digitsOnly.replace(/^(\d{5})(\d{3})$/, '$1-$2')

      setAddress((prevState) => ({
        ...prevState,
        zip: formattedCepValue,
      }))
      return
    }

    if (name === 'uf') {
      const inputValueWithoutNumbers = value.replace(/^[0-9]$/, '')
      const inputValueFormatted = inputValueWithoutNumbers
        .slice(0, 2)
        .toUpperCase()

      setAddress((prevState) => ({
        ...prevState,
        uf: inputValueFormatted,
      }))
      return
    }

    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  function handlePaymentMethodChange(
    newPaymentMethod: 'credit' | 'debit' | 'cash',
  ) {
    changePaymentMethod(newPaymentMethod)
    setPaymentMethod(newPaymentMethod)
  }

  function handleCompleteOrder() {
    if (cart.products.length === 0) {
      toast.error('Adicione produtos ao carrinho antes de finalizar o pedido')
      return
    }

    if (
      !address.zip ||
      !address.street ||
      !address.neighborhood ||
      !address.city ||
      !address.uf
    ) {
      toast.error('Preencha todos os campos obrigatórios')
      return
    }

    if (!address.number && !address.complement) {
      toast.error('Preencha o número ou o complemento')
      return
    }

    if (!paymentMethod) {
      toast.error('Selecione uma forma de pagamento')
      return
    }

    addAddressToCart({
      zip: address.zip,
      street: address.street,
      number: address.number,
      complement: address.complement,
      neighborhood: address.neighborhood,
      city: address.city,
      uf: address.uf,
    })

    navigate('/confirmation')
  }

  useEffect(() => {
    function changeTotalItemsPrice() {
      const totalValueFromCart = cart.products.reduce(
        (acc, item) => {
          const totalValue = item.price * item.quantity

          return {
            totalValue: acc.totalValue + totalValue,
          }
        },
        { totalValue: 0 },
      )

      setTotalPriceFromProductsInCart(totalValueFromCart.totalValue)
    }
    changeTotalItemsPrice()

    function changeTotalOrderPrice() {
      const totalOrderValue =
        totalPriceFromProductsInCart + totalPriceFromDelivery

      setTotalPriceFromOrder(totalOrderValue)
    }
    changeTotalOrderPrice()
  }, [
    cart.products,
    totalPriceFromOrder,
    totalPriceFromProductsInCart,
    totalPriceFromDelivery,
  ])

  return (
    <div>
      <Header />

      <main className="w-screen flex items-start justify-center gap-8 px-40 py-24">
        <section className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-base-subtitle font-baloo text-lg font-bold">
            Complete seu pedido
          </h2>

          <form className="w-full flex flex-col items-start justify-center gap-4 p-10 rounded-md bg-base-card">
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
              className="p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-yellow-dark"
              type="text"
              name="zip"
              placeholder="CEP"
              maxLength={9}
              value={address.zip}
              onChange={handleAddressChange}
            />

            <input
              className="w-full p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-yellow-dark"
              type="text"
              name="street"
              placeholder="Rua"
              value={address.street}
              onChange={handleAddressChange}
            />

            <div className="w-full flex items-center gap-3">
              <input
                className="p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-yellow-dark"
                type="number"
                min={0}
                name="number"
                placeholder="Número"
                value={address.number}
                onChange={handleAddressChange}
              />

              <div className="flex w-full items-center justify-between p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-yellow-dark">
                <input
                  className="w-full h-full bg-base-input text-sm text-base-text placeholder-base-label focus:outline-yellow-dark"
                  type="text"
                  name="complement"
                  placeholder="Complemento"
                  value={address.complement}
                  onChange={handleAddressChange}
                />
                <span className="text-base-label text-xs italic">Opcional</span>
              </div>
            </div>

            <div className="w-full flex gap-2 item justify-around">
              <input
                className="w-48 p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-yellow-dark"
                type="text"
                name="neighborhood"
                placeholder="Bairro"
                value={address.neighborhood}
                onChange={handleAddressChange}
              />

              <input
                className="w-full p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-yellow-dark"
                type="text"
                name="city"
                placeholder="Cidade"
                value={address.city}
                onChange={handleAddressChange}
              />

              <input
                className="w-14 p-3 rounded-md bg-base-input text-sm text-base-text placeholder-base-label focus:outline-yellow-dark"
                type="text"
                min={2}
                max={2}
                name="uf"
                placeholder="UF"
                value={address.uf}
                onChange={handleAddressChange}
              />
            </div>
          </form>

          <div className="w-full flex flex-col justify-center gap-8 p-10 rounded-md bg-base-card">
            <div className="flex items-start gap-2">
              <CurrencyDollar size={24} className="text-purple" />

              <div className="flex flex-col items-start">
                <h3 className="text-base-subtitle">Pagamento</h3>

                <p className="text-base-text text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => handlePaymentMethodChange('credit')}
                className={
                  paymentMethod === 'credit'
                    ? 'flex items-center gap-3 p-4 rounded-md bg-purple-light border border-purple'
                    : 'flex items-center gap-3 p-4 bg-base-button rounded-md hover:bg-base-hover'
                }
              >
                <CreditCard size={20} className="text-purple" />

                <span
                  className={
                    paymentMethod === 'credit'
                      ? 'text-base-text text-xs leading-5 uppercase'
                      : 'text-base-subtitle text-xs leading-5 uppercase'
                  }
                >
                  Cartão de crédito
                </span>
              </button>

              <button
                onClick={() => handlePaymentMethodChange('debit')}
                className={
                  paymentMethod === 'debit'
                    ? 'flex items-center gap-3 p-4 rounded-md bg-purple-light border border-purple'
                    : 'flex items-center gap-3 p-4 bg-base-button rounded-md hover:bg-base-hover'
                }
              >
                <Bank size={20} className="text-purple" />
                <span
                  className={
                    paymentMethod === 'debit'
                      ? 'text-base-text text-xs leading-5 uppercase'
                      : 'text-base-subtitle text-xs leading-5 uppercase'
                  }
                >
                  cartão de débito
                </span>
              </button>

              <button
                onClick={() => handlePaymentMethodChange('cash')}
                className={
                  paymentMethod === 'cash'
                    ? 'flex items-center gap-3 p-4 rounded-md bg-purple-light border border-purple'
                    : 'flex items-center gap-3 p-4 bg-base-button rounded-md hover:bg-base-hover'
                }
              >
                <Money size={20} className="text-purple" />
                <span
                  className={
                    paymentMethod === 'cash'
                      ? 'text-base-text text-xs leading-5 uppercase'
                      : 'text-base-subtitle text-xs leading-5 uppercase'
                  }
                >
                  dinheiro
                </span>
              </button>
            </div>
          </div>
        </section>

        <aside className="flex flex-col items-start gap-4">
          <h2 className="font-baloo font-bold text-base-subtitle text-lg">
            Cafés selecionados
          </h2>

          <div className="bg-base-card p-10 flex flex-col gap-6 rounded-tr-3xl rounded-tl-md rounded-br-md rounded-bl-3xl">
            {cart.products.map((item) => {
              return (
                <div key={item.id}>
                  <ProductItem
                    productId={item.id}
                    imgPath={item.imgPath}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                  />

                  <Separator />
                </div>
              )
            })}

            <div className="flex flex-col gap-3">
              <div className="w-full flex items-center justify-between">
                <p className="text-base-text text-sm">Total dos itens</p>

                <span className="text-base-text">
                  {totalPriceFromProductsInCart.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>

              <div className="w-full flex items-center justify-between">
                <p className="text-base-text text-sm">Entrega</p>

                <span className="text-base-text">
                  {totalPriceFromDelivery.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>

              <div className="w-full flex items-center justify-between font-bold text-base-subtitle text-xl">
                <p>Total</p>

                <span>
                  {totalPriceFromOrder.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              </div>
            </div>

            <button
              onClick={handleCompleteOrder}
              className="px-3 py-2 rounded-md bg-yellow text-white uppercase font-bold text-sm leading-6"
            >
              Confirmar pedido
            </button>
          </div>
        </aside>
      </main>
    </div>
  )
}
