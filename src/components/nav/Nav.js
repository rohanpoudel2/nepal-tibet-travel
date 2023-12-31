"use client"
import Image from "next/image";
import styles from "./nav.module.scss";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { cn } from "@/lib/utils"

const Nav = () => {

  const [colourChange, setColourChange] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const changeNavColour = () => {
      if (window.scrollY >= 0.1) {
        setColourChange(true);
      } else {
        setColourChange(false);
      }
    };

    window.addEventListener("scroll", changeNavColour);

    return () => {
      window.removeEventListener("scroll", changeNavColour);
    }
  }, []);

  useEffect(() => {
    setShowSearchModal(false);
  }, [pathname])

  const components = [
    {
      title: "Nepal Information",
      href: "/country/nepal",
      description:
        "Information About Nepal",
    },
    {
      title: "Trekking",
      href: "/country/nepal/trekking",
      description:
        "Information About Trekking in Nepal",
    },
    {
      title: "Tour",
      href: "/country/nepal/tour",
      description:
        "Information About Tour in Nepal",
    },
    {
      title: "Peak Climbing",
      href: "/country/nepal/peak-climbing",
      description: "Information About Peak Climbing in Nepal",
    },
    {
      title: "Jungle Safari",
      href: "/country/nepal/jungle-safari",
      description:
        "Information About Jungle Safari in Nepal",
    },
    {
      title: "Expedition",
      href: "/country/nepal/expedition",
      description:
        "Information About Expedition in Nepal",
    },
    {
      title: "Adventure Activities",
      href: "/country/nepal/adventure-activities",
      description:
        "Information About Adventure Activities in Nepal",
    },
  ]

  const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  })
  ListItem.displayName = "ListItem"


  return (
    <div className={styles.navbar} style={{ backgroundColor: colourChange ? "white" : "rgba(255,255,255,0.5)" }} >
      <div className="container">
        <div className={styles.nav}>
          <Link href="/">
            <div className={styles.logo}>
              <Image
                src="/images/mactrek.svg"
                alt="logo"
                fill
                className={styles.image}
              />
              <Image
                src="/images/mactrek_small.svg"
                alt="logo"
                fill
                className={styles.image_small}
              />
            </div>
          </Link>
          <NavigationMenu className={`${styles.navItems}`}>
            <NavigationMenuList className="flex gap-0 md:gap-5">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Nepal</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid h-[500px] overflow-scroll w-[250px] sm:w-[300px] sm:h-[550px] gap-3 p-4 md:h-[600px] md:w-[500px] md:grid-cols-2 lg:w-[600px] lg:h-[600px] ">
                    <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md relative"
                          href="/"
                        >
                          <Image
                            src="/images/nepal.png"
                            width={50}
                            height={50}
                            alt="Nepal Flag"
                          />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Nepal
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Nepal, a land of diverse cultures and stunning landscapes.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tibet</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid h-[500px] overflow-scroll w-[250px] sm:w-[300px] sm:h-[550px] gap-3 p-4 md:h-[600px] md:w-[500px] md:grid-cols-2 lg:w-[600px] lg:h-[600px] ">
                    <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md relative"
                          href="/"
                        >
                          <Image
                            src="/images/tibet.webp"
                            width={50}
                            height={50}
                            alt="China Tibet Flag"
                          />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Tibet
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Tibet, a plateau region rich in spirituality and breathtaking vistas.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Bhutan</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid h-[500px] overflow-scroll w-[250px] sm:w-[300px] sm:h-[550px] gap-3 p-4 md:h-[600px] md:w-[500px] md:grid-cols-2 lg:w-[600px] lg:h-[600px] ">
                    <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md relative"
                          href="/"
                        >
                          <Image
                            src="/images/bhutan.png"
                            width={50}
                            height={50}
                            alt="Bhutan Flag"
                          />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Bhutan
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Bhutan, a tranquil Himalayan kingdom with a focus on happiness.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div >
  )
}

export default Nav