'use client'

import { useScroll } from '@/hooks/useScroll'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const Nav = () => {
  const scrolled = useScroll()
  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="hidden container mx-auto sm:flex items-center justify-between">
        <Image
          src="/logo.png"
          alt="Logo"
          width={70}
          height={100}
          className={'flex-shrink-0'}
        />
        <NavigationMenu className="hidden sm:flex items-center">
          <NavigationMenuList className="px-4 py-2 rounded-lg">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${
                  scrolled
                    ? 'text-black-foreground hover:bg-primary/50 text-xl font-bold'
                    : 'text-white hover:text-black/80 text-xl font-bold'
                }`}
              >
                <Link href="/" className="p-2 block">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${
                  scrolled
                    ? 'text-black-foreground hover:bg-primary/50 text-xl font-bold'
                    : 'text-white hover:text-black/80 text-xl font-bold'
                }`}
              >
                <Link href="/" className="p-2 block">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${
                  scrolled
                    ? 'text-foreground hover:bg-primary/50 text-xl font-bold'
                    : 'text-white hover:text-black/80 text-xl font-bold'
                }`}
              >
                <Link href="/" className="p-2 block">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`${
                  scrolled
                    ? 'text-xl font-bold'
                    : 'bg-transparent text-white hover:bg-muted hover:text-foreground text-xl font-bold'
                }`}
              >
                Contribute
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-popover/95 backdrop-blur-sm rounded-lg border shadow-lg">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-popover-foreground">
                          Cat House on the Kings
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Learn how you can contribute to our mission.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/donate" title="Donate">
                    Help support our mission through monetary contributions.
                  </ListItem>
                  <ListItem href="/volunteer" title="Volunteer">
                    Join our team of dedicated volunteers.
                  </ListItem>
                  <ListItem href="/foster" title="Foster">
                    Provide a temporary home for cats in need.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${
                  scrolled
                    ? 'text-foreground hover:bg-primary/50 text-xl font-bold'
                    : 'text-white hover:text-black/80 text-xl font-bold'
                }`}
              >
                <Link href="/faq" className="p-2 block">
                  FAQ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${
                scrolled
                  ? 'text-black-foreground hover:bg-primary/50'
                  : 'bg-transparent text-white hover:text-black/80'
              }`}
            >
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink
                    href="/about"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">About</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Learn more about us.
                    </p>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={`${
                scrolled
                  ? 'text-black-foreground hover:bg-primary/50'
                  : 'bg-transparent text-white hover:text-black/80'
              }`}
            >
              Contact
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-slate-800">
              <ul>
                <
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
          </NavigationMenuList>
          <NavigationMenuIndicator />
          <NavigationMenuViewport />
        </NavigationMenu>
        <div className="ml-auto hidden md:block">
          <Button className="bg-[#a2bb31] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#8fa82a] transition">
            <Link href="/donate">Donate Now</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between sm:hidden px-4 py-2 ">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <Button className="bg-[#a2bb31] text-white px-4 py-1 mr-2 rounded-md text-sm font-semibold hover:bg-[#8fa82a] transition">
          <Link href="/donate">Donate</Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="">
            <Button
              variant={'ghost'}
              size={'icon'}
              className="bg-transparent hover:bg-black/20 focus:bg-black/20 size-8"
              aria-label="Open menu"
            >
              <Menu
                className={`size-6 text-black ${
                  scrolled ? 'text-black' : 'text-white'
                }`}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="start">
            <Link href="/" className="py-2 text-lg font-bold">
              <DropdownMenuLabel>Home</DropdownMenuLabel>
            </Link>
            <DropdownMenuGroup>
              <DropdownMenuItem>About</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Nav

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
