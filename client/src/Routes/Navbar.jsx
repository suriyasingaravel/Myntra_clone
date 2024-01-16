/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*
  This StoreNavigation requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'WOMEN',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'CLOTHING',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'ACCESSORIES',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'MEN',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'CLOTHING',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'ACCESSORIES',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'BRANDS',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'COMPANY', href: '#' },
    { name: 'STORES', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white w-full border-b border-gray-200 z-20">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-20 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2 w-full">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels  as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10  ">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="/login" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="/signup" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>

              
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {/* <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p> */}

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="data:image/svg+xml;base64,PHN2ZyBpZD0ibG9nbyIgc3R5bGU9InBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDA7IGhlaWdodDogMDsgb3ZlcmZsb3c6IGhpZGRlbjsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj4gPGRlZnM+IDxmaWx0ZXIgeD0iLTMuOCUiIHk9Ii0yLjglIiB3aWR0aD0iMTA3LjclIiBoZWlnaHQ9IjExMS4xJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+IDxmZU9mZnNldCBkeT0iMTAiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4gPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+IDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIvPiA8L2ZpbHRlcj4gPHBhdGggZD0iTTQ5OS4xNzggMTk1LjU0YzUuODI4IDE2LjAwNiAxNC40NDcgMzkuNjU3LS41NjItMS41NjYtNS4zMzYtMTQuNjQtMy42MTgtOS45MTYtLjM5My0xLjA1My0xNC44MDctNDAuMzczLTM2LjEtODQuMjc0LTU4LjUzLTEyMC42MzctMjQuMDQtMzguOTc1LTQ1LjU4OC02MS4xMTYtNjAuOTgzLTY5LjE5NSAwIDAtNy45MzItNS42MjQtMTkuNTMyLS43N2wtLjM5Ni4xNDFjLTE0Ljk5NiA1LjQ3LTMzLjcxNSAyNS4yODYtNTUuNjMzIDU4LjkwMi0xNC41MzggMjIuMjkyLTI4LjkzNyA0OC4zMzQtNDEuNzY0IDc1LjM5LTE0LjA0Mi0yOS41NTctMzAuMDUxLTU4LjEyMy00NS42ODctODEuMjktMTUuODctMjMuNTE2LTM5LjQ5My01NC43OC02MS4zMDQtNTQuNzgtMS42NjMgMC0zLjMxLjE3NC00Ljg5NS41MTN2LjAwM2MtOS43MTcgMS43ODQtMjAuMDI3IDguOTk1LTMyLjM1OSAyMi42NDktMTAuMTI1IDExLjIwOS0yMS4xNTUgMjYuMjc4LTMyLjc4IDQ0Ljc4NC0yMy41MTMgMzcuNDI5LTQ1LjgzIDgzLjEzNC02MS4yMyAxMjUuNDA0QzYuNzY1IDIzOC45ODYtLjg4OCAyNzUuNjQzLjM4MiAzMDIuOTg3Yy44ODEgMTguOTg2IDYuNjY0IDQzLjE5IDI4LjcyNSA1My4yNzVsMy4wOTMgMS4yOTkgMi44NjcuOTQ1YTQyLjY3OCA0Mi42NzggMCAwMDEyLjAzMiAxLjczM2guMDAyYzE3LjY4NiAwIDM1LjA1LTEwLjU2NyA1MS42MDMtMzEuNDAzIDE2LjIwMy0yMC4zOTQgMzEuNzQ0LTUwLjg0NSA0Ni4xOTYtOTAuNTE2YTYyMi4yMTMgNjIyLjIxMyAwIDAwOS40MDUtMjcuOTY1IDYyNy4yMjUgNjI3LjIyNSAwIDAwOS4zOTUgMjcuOTE4YzI2LjA3NyA3MS41NyA1NS4wNjUgMTEyLjA1OCA4Ni4xNjEgMTIwLjMzOGwuNDguMTIxYy42MDIuMTUzIDEuMzM2LjMzOSAyLjE2LjUwMWwuNTI3LjEwOWMyLjM2Mi40NTIgNC42OS43MTIgNy4xMTUuOGwuMjg1LjAxYTMwLjcxIDMwLjcxIDAgMDAzLjIwMy0uMDYzYy40NzEtLjAyLjkwNC0uMDQ4IDEuMzgxLS4wOGwxLjAyMy0uMTA1YTM1LjgzIDM1LjgzIDAgMDAxLjE1OS0uMTU4Yy41LS4wNiAxLjIyLS4xNSAyLjA3My0uMzExLjcxLS4xMyAxLjQyNC0uMjggMi4yNC0uNDczbC40NS0uMTEyYy4xOS0uMDQ0LjM3OS0uMDkyLjU3LS4xNDMgMzEuMjM3LTguMDUyIDYwLjM0NC00OC41NjMgODYuNTEyLTEyMC40MWE2MTAuNyA2MTAuNyAwIDAwOC45MjgtMjYuMzggNjA1LjU5MyA2MDUuNTkzIDAgMDA4LjkyOCAyNi4zNWMxNC40MzIgMzkuNjUzIDI5Ljk2MiA3MC4wOTkgNDYuMTU2IDkwLjQ5NCAxNi41NDcgMjAuODM3IDMzLjkwNiAzMS40MDQgNTEuNTkyIDMxLjQwNmguMDA3YzQuNzI5IDAgOS40MDctLjc4NSAxMy45Mi0yLjMzNSAxMS4xNS0yLjk0OCAyMC4wNjUtMTAuMTczIDI1LjgxMi0yMC45NCAxNC4yMDEtMjYuNTg2IDkuMDc4LTc0LjE0NS0xNS4yMDMtMTQxLjM1MiIgaWQ9ImIiLz4gPC9kZWZzPiA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCAxMzApIj4gPHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+IDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz4gPC9nPiA8cGF0aCBkPSJNMjEyLjgzMyAxNDUuMDY1Yy0yNi4yOTcgMy45NzMtODQuNjQ1IDk3LjcxOS0xMTYuMDE4IDE4My44MjMtMzMuMzQgOTEuNTcyLTI1LjM1OSAxMzUuNzk5LjgzNSAxNDUuNDEzLjAxOC4wMi4wMzcuMDIuMDM3LjAycy4wMDggMCAuMDM2LjAyYzI2LjI2MyA5LjQ1OCA2MC44MzQtMTkuMjg4IDk0LjIwMS0xMTAuODcgOS4wMjItMjQuNzkgMTYuNzMzLTUxLjQ4NSAyMi43NDEtNzcuNDQtMy4xNjMtNzAuNTUtMi4xNTctMTQwLjg5LTEuODMyLTE0MC45NjYiIGZpbGw9IiNGNDFDQjIiLz4gPHBhdGggZD0iTTIxMi44MzQgMTQ1LjA2NWMyMS43NzUtNC42NzYgNzQuNTczIDc0LjcwNiAxMDguOTE1IDE1Ni40MS42MjYgMTkuMjAzLTguNTI0IDE3My4yMzMtNy44ODQgMTczLjQyNi0yMy4xNTEtNi4xNjItNTAuMTc2LTM5LjI4Mi03Ni40ODItMTExLjQ4NC05LjAxLTI0Ljc3MS0xNi43NTMtNTEuNDUzLTIyLjcxNy03Ny4zODZsLS40ODEtMi4wOTZjLTE1Ljc1OC02OS4xMjQtMTkuMjE1LTEzMi4yODUtMi40MS0xMzguNTc0IDAgMCAuMDA2IDAgLjAyNi0uMDFoLjAyYTguNzUgOC43NSAwIDAxMS4wMTMtLjI4NWguMDAyeiIgZmlsbD0iI0ZGOTEyRSIvPiA8cGF0aCBkPSJNMzMwLjc5NCA0NzQuNTJjLS41MTQuMTY2LTEuMDI0LjMyMi0xLjUzMi40Ny0uMjMuMDY2LS40NTEuMTA0LS42NjcuMTctLjUuMTE2LTEuMDE4LjIzLTEuNTU5LjMyNi0uNTM1LjEwNC0xLjAxOC4xNTItMS41MDIuMjEzLS4zOTkuMDcyLS43NTYuMTA4LTEuMTM4LjE1OC0uNDE4LjAyOC0uNzkxLjA1LTEuMjEzLjA2OGEyMy44OSAyMy44OSAwIDAxLTEuNjIzLjA1NmMtLjE5MyAwLS4zNzMtLjAxNy0uNTU1LS4wMTdhMzIuNTE0IDMyLjUxNCAwIDAxLTQuOTY5LS41NTZjLS4wNzUtLjAxOS0uMTcyLS4wMzYtLjI2MS0uMDU3LS42MDgtLjExNS0xLjI2LS4yODYtMS45MS0uNDUtLjY0LS4xOTMtMS4zMjktLjM5My0xLjk5Ni0uNjI4bC0uMDItLjAxaC0uMDI4Yy0yNi4yMTItOS42MTUtMzQuMi01My44MzktLjgzMy0xNDUuNDIgMy4yOS05LjA3OCA2LjkyLTE4LjIzMyAxMC43NjItMjcuMzY4bC45NDEtMi4yM2MzMS4yMTYtNzMuNTQ3IDc3LjAyLTE0NC42MDIgMTAxLjMwNy0xNTMuNDU2IDEuMDA1IDE5Ljk3NC43IDcwLjcyIDQuMzE5IDE0Mi4zNTMtNS45MTcgMjUuMjU3LTEzLjQ1NSA1MS4xOS0yMi4yNDkgNzUuMjkyLTI2LjQyOCA3Mi41NTUtNTMuNTg1IDEwNS42My03Ni44MDYgMTExLjU1Ny4yNTQtLjA3NC41MDktLjE1Ljc2NC0uMjI4eiIgZmlsbD0iI0YyNTUxMSIvPiA8cGF0aCBkPSJNNDI3LjgzMiAyODYuMDYyYy0xNS44Ny02OC41OTgtMTkuNzEtMTMxLjg5LTMuODM0LTE0MC4yNzMgMS42NzMtLjU5IDMuMTk4LS45MDUgNC42NDMtLjkxNyAxLjIyNC4wOTYgMi40NzUuMzgyIDMuNzk1Ljg1MyAyNy40NzQgOS42ODYgODIuODkzIDk5Ljk2MiAxMTMuMjA3IDE4My4xMDcgMzMuMzQgOTEuNTc0IDI1LjM4IDEzNS44MTUtLjgzNCAxNDUuNDA5IDAgMC0uMDIgMC0uMDQ3LjAyNGgtLjAxN2MtMjYuMjYgOS40NzgtNjAuODMzLTE5LjI2OS05NC4xNjYtMTEwLjg0OS04LjgxLTI0LjEwMy0xNi4zNDYtNTAuMDE3LTIyLjI2Mi03NS4yNzR6IiBmaWxsPSIjRjQxQ0IyIi8+IDxwYXRoIGQ9Ik00MzIuNDM2IDE2Mi43NDhjMjcuNDc0IDkuNjg2IDg0Ljc4NiA5OS4wMTYgMTE1LjA5OSAxODIuMTYgMTMuNyAzNy42MzEgMjAuMTQyIDU4Ljg1NSAxOS44ODEgODYuOTUgMS42NjYtMjMuNzk0LTQuNTI4LTU1LjY1OC0yMS43NzMtMTAzLjAyNi0zMC4zMTItODMuMTQ1LTg1LjczMy0xNzMuNDIxLTExMy4yMDctMTgzLjEwNy0xLjMyLS40NzEtMi41NzEtLjc1Ny0zLjc5NS0uODU0LTEuNDQ1LjAxMy0yLjk3LjMyNy00LjY0My45MTgtMjQuNTMyIDguOTQ1LTcxLjAxOSA4Mi4yOTYtMTAyLjI1IDE1Ni42MzMtMzQuMzQtODEuNzA2LTg3LjEzOC0xNjIuMDMzLTEwOC45MTUtMTU3LjM1Ni0yNi4yOTYgMy45NzItODQuNjQ2IDk3LjcxNi0xMTYuMDE4IDE4My44MjItMTcuMjQzIDQ3LjM1OC0yMy40MzMgODAuMTU4LTIxLjc2NiAxMDMuOTUtLjI2Mi0zMi44NTggNi4xNzYtNTAuMjUyIDE5Ljg3My04Ny44NzMgMzEuMzc0LTg2LjEwNSA5MS42MTUtMTc4LjkwNCAxMTcuOTEtMTgyLjg3NiAyMS43NzgtNC42NzcgNjUuNTM0IDYwLjczMiAxMDguOTE3IDE0Mi4yMjIgMzkuOTMtNzUuNTY5IDc3LjcxNy0xMzIuNTU0IDEwMi4yNDktMTQxLjUgMS41ODItLjU2IDMuMDMyLS44NyA0LjQxLS45MSIgZmlsbD0iIzgyMTQxNCIvPiA8L2c+PC9zdmc+"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="/signup" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="/bag" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
