"use client";
import { Fragment, useState, useRef } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import productsData from "../components/productsDataNew";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event: any) => {
    setIsActive((current) => !current);
  };
  const onSelectedIndex = (index: any) => {
    setActiveIndex(index);
  };
  const buttonRef: any = useRef();

  const [TabActiveIndex, tabSetActiveIndex] = useState<any>(false);
  const tabHandleClick = (m: any) => {
    tabSetActiveIndex(m === activeIndex ? 0 : m);
  };
  const titles = productsData.map((tab, i) => {
    return (
      <li
        className={`tab${i === activeIndex ? " active" : ""}`}
        key={i}
        onClick={() => {
          buttonRef.current?.click();
          onSelectedIndex(i);
        }}
      >
        {tab.name}
      </li>
    );
  });

  const contents = productsData
    .filter((tab, i) => i === activeIndex)
    .map((index, i) => {
      return (
        <>
          {index.media.map((post) => {
            return (
              <Link
                href={`/product/${index.name}/${post?.product_name}`}
                key={post.id}
                onClick={() => buttonRef.current?.click()}
              >
                <Image
                  src={post.url}
                  alt={post.title}
                  height={200}
                  width={200}
                />
                <p>{post.title}</p>
              </Link>
            );
          })}
        </>
      );
    });
  return (
    <header className="main-header">
      <nav
        className="mx-auto flex  container items-center justify-between"
        aria-label="Global"
      >
        <div className="flex">
          <Link href="/" className="brand">
            <Image
              src="/assets/blinds-warehouse-sydney-logo.svg"
              alt="Blinds Warehouse Sydney"
              width={126}
              height={30}
            />
          </Link>
        </div>
        <div className="flex lg:hidden nav_menu">
          <button
            type="button"
            className=" inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="hamburger_icon" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 nav-items">
          <Link href="/about-us" className="text-sm leading-6 text-gray-900">
            About Us
          </Link>

          <Popover>
            <Popover.Button
              ref={buttonRef}
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
            >
              Products
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                onClick={() => buttonRef.current?.click()}
                className="absolute top-full z-10 bg-white dropdown w-100"
              >
                <div className="tabs">
                  <div className="container mx-auto">
                    <ul>{titles}</ul>
                    <div className="grid grid-cols-6 gap-4 tab_content">
                      {contents}
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link href="/contact-us" className="text-sm leading-6 text-gray-900">
            Get in Touch
          </Link>
        </Popover.Group>

        <div className="flex gap-4 items-center contact_info">
          <Link
            href="callto:+61 408 727 291"
            rel="noopener noreferrer"
            target="_blank"
            className="contact_link"
          >
            <Image
              src="/assets/phone.svg"
              className="phone_icon"
              alt="image"
              height={24}
              width={24}
            />
            <span className="call_text" style={{ fontWeight: 600 }}>
              +61 408 727 291
            </span>
          </Link>
          <Link
            href="mailto:blindswarehousesydney@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="email_link"
          >
            <EnvelopeIcon className="email_icon" aria-hidden="true" />
            <span className="email_text"> Email Us</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 overly" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="close_icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Products
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </Link>
                <Popover className="relative">
                  <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      Products
                    </span>
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none "
                      aria-hidden="true"
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="bg-white shadow-sm ">
                      <div className="tabs">
                        {productsData.map((item, index) => (
                          <div key={item.name}>
                            <ul className={TabActiveIndex ? "open" : "active"}>
                              <li>
                                <Link
                                  href={`/product/${item.name}`}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {" "}
                                  {item.name}
                                </Link>
                                <button onClick={() => tabHandleClick(index)} className="arrow_btn">
                                  <ChevronDownIcon
                                    className="h-5 w-5 flex-none "
                                    aria-hidden="true"
                                  />
                                </button>
                              </li>
                            </ul>
                            {index === TabActiveIndex && (
                              <div className="mobile_navlist">
                                <div className="grid grid-cols-6 gap-4 tab_content">
                                  {item.media.map((mediaItem, index) => (
                                    <div key={mediaItem.title}>
                                      <Link
                                        href={`/product/${item?.name}/${mediaItem.id}`}
                                        key={mediaItem.id}
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        <Image
                                          src={mediaItem.url}
                                          alt={mediaItem.title}
                                          height={200}
                                          width={200}
                                        />
                                        <p className="mt-4">
                                          {mediaItem.title}
                                        </p>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
