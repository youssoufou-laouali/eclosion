import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, ArrowDownIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/outline";

import { logo } from "../constant";

const navigation = {
  categories: [
    {
      id: "actualite",
      name: "Actualités",
      featured: [
        {
          name: "Election Presidentielle 2022",
          href: "#",
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/eclosion-ne.appspot.com/o/election%20france.jpg?alt=media&token=1f2e0532-9e72-45a4-94ee-5d21bc8fd080",
          imageAlt:
            "A Marseille, Emmanuel Macron projette la France en « grande nation écologique » pour séduire l’électorat de gauche",
        },
        {
          name: "",
          href: "#",
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/eclosion-ne.appspot.com/o/mali%20militaire.jfif?alt=media&token=5c5b80a8-24fa-4dda-9f37-65d7c912929b",
          imageAlt:
            "Mali : l’Union européenne suspend ses formations militaires après le massacre de Moura",
        },
        {
          name: "",
          href: "#",
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/eclosion-ne.appspot.com/o/poutine.jpg?alt=media&token=911e1450-c161-4346-b392-b3ab02215750",
          imageAlt:
            "Les ressorts de la crise démocratique française ressemblent à ceux des pays africains",
        },
      ],
      sections: [
        {
          id: "laUne",
          name: "A la une",
          items: [
            { name: "Les alliances politiques  au Niger", href: "#" },
            { name: "Ramadan: Mois de spiritualité", href: "#" },
            { name: "Eau et Electricité, l'eternel recommencement", href: "#" },
            { name: "Guerre en Ukraine", href: "#" },
            { name: "Election présidentielle 2022 (France)", href: "#" },
            { name: "Toutes les actualité en continu", href: "#" },
          ],
        },
        {
          id: "actualite",
          name: "Actualités",
          items: [
            { name: "International", href: "#" },
            { name: "Politique", href: "#" },
            { name: "Société", href: "#" },
            { name: "Education", href: "#" },
            { name: "Sports", href: "#" },
          ],
        },
      ],
    },
    {
      id: "category",
      name: "Catégories",
      featured: [
        {
          name: "Newsletters",
          href: "#",
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/eclosion-ne.appspot.com/o/newsletter.png?alt=media&token=b097845e-d15b-49f6-901a-3d5f3e0e58d8",
          imageAlt: "Decouvrez notre offre de newsletters",
        },
        {
          name: "L'application Eclosion",
          href: "#",
          imageSrc:
            "https://firebasestorage.googleapis.com/v0/b/eclosion-ne.appspot.com/o/application%20mobile.webp?alt=media&token=108c1a13-d4b3-4a27-b67f-3e90e4c24d92",
          imageAlt: "Découvrez notre application pour mobile & tablette",
        },
      ],
      sections: [
        {
          id: "politique",
          name: "Politique",
          items: [
            { name: "National", href: "#" },
            { name: "Scène international", href: "#" },
            { name: "Dossiers et Enquetes", href: "#" },
            { name: "Decryptage", href: "#" },
            { name: "Sécurité", href: "#" },
            { name: "Interview", href: "#" },
            { name: "Opinions", href: "#" },
          ],
        },
        {
          id: "economie",
          name: "Economie",
          items: [
            { name: "Entrepreneuriat", href: "#" },
            { name: "Transport", href: "#" },
            { name: "Télécoms", href: "#" },
            { name: "Finance", href: "#" },
            { name: "Energie", href: "#" },
            { name: "Banque", href: "#" },
          ],
        },
        {
          id: "societe",
          name: "Societé",
          items: [
            { name: "Faits divers", href: "#" },
            { name: "Education", href: "#" },
            { name: "Art&Sport", href: "#" },
            { name: "Justice", href: "#" },
            { name: "Santé", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Reportage Video", href: "#" },
    { name: "Abonnement", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2 bg-gray-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto shadow-xl bg-gray-50">
              <div className="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="flex px-4 -mb-px space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "text-red-600 border-red-600"
                              : "text-gray-900 border-transparent",
                            "flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium"
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className="px-4 pt-10 pb-8 space-y-10"
                    >
                      <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item) => (
                          <div
                            key={item.name}
                            className="relative text-sm group"
                          >
                            <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 group-hover:opacity-75">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center"
                              />
                            </div>
                            <a
                              href={item.href}
                              className="block mt-6 font-medium text-gray-900"
                            >
                              <span
                                className="absolute inset-0 z-10"
                                aria-hidden="true"
                              />
                              {item.name}
                            </a>
                            <p aria-hidden="true" className="mt-1">
                              {item.imageAlt}
                            </p>
                          </div>
                        ))}
                      </div>
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p
                            id={`${category.id}-${section.id}-heading-mobile`}
                            className="font-medium text-gray-900"
                          >
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="flex flex-col mt-6 space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="block p-2 -m-2 text-gray-500"
                                >
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

              <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a
                      href={page.href}
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                <div className="flow-root">
                  <a
                    href="/signin"
                    className="block p-2 -m-2 font-medium text-gray-900"
                  >
                    Se connecter
                  </a>
                </div>
                <div className="flow-root">
                  <a
                    href="/signup"
                    className="block p-2 -m-2 font-medium text-gray-900"
                  >
                    Créer un compte
                  </a>
                </div>
              </div>

              <div className="px-4 py-6 border-t border-gray-200">
                <a href="#" className="flex items-center p-2 -m-2">
                  <img
                    src="https://tailwindui.com/img/flags/flag-niger.svg"
                    alt=""
                    className="flex-shrink-0 block w-5 h-auto"
                  />
                  <span className="block ml-3 text-base font-medium text-gray-900">
                    NE
                  </span>
                  <span className="sr-only">, Niger</span>
                </a>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative z-40 bg-gray-50">
        {/* <p className="flex items-center justify-center h-10 px-4 text-sm font-medium text-white bg-red-600 sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p> */}

        <nav
          aria-label="Top"
          className="pr-4 mx-auto max-w-7xl sm:pr-6 lg:pr-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              <button
                type="button"
                className="p-2 text-gray-400 rounded-md bg-gray-50 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex ml-4 lg:ml-0">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img className="h-16 " src={logo} alt="" />
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
                                  ? "border-red-600 text-red-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                              )}
                            >
                              {category.name}{" "}
                              {category.sections && (
                                <ArrowDownIcon className="inline-block w-5 h-3 -mb-1 " />
                              )}
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
                            <Popover.Panel className="absolute inset-x-0 text-sm text-gray-500 top-full">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 shadow bg-gray-50 top-1/2"
                                aria-hidden="true"
                              />

                              <div className="relative bg-gray-50">
                                <div className="px-8 mx-auto max-w-7xl">
                                  <div className="grid grid-cols-2 py-16 gap-y-10 gap-x-8">
                                    <div className="grid grid-cols-2 col-start-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="relative mb-5 text-base group sm:text-sm"
                                        >
                                          <div className="overflow-hidden bg-gray-100 rounded-lg aspect-w-5 aspect-h-3 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="block mt-2 font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            {item.imageAlt}
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="grid grid-cols-3 row-start-1 text-sm gap-y-10 gap-x-8">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
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

              <div className="flex items-center ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="/signin"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Se connecter
                  </a>
                  <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
                  <a
                    href="/signup"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Créer un compte
                  </a>
                </div>

                {/* Cart */}
                <div className="flow-root ml-4 lg:ml-6">
                  <a href="#" className="flex items-center p-2 -m-2 group">
                    <UserCircleIcon
                      className="flex-shrink-0 w-6 h-6 text-pink-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      Profile
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
