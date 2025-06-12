"use client"

import type { LinkProps } from "next/link"
import Link from "next/link"
import type { AnchorHTMLAttributes, PropsWithChildren } from "react"
import type { UrlObject } from "url"

type Url = string | UrlObject

type ConditionalLinkProps = {
  href?: Url
} & Partial<Omit<LinkProps, "href">> &
  AnchorHTMLAttributes<HTMLAnchorElement>

type LinkWrapperProps = PropsWithChildren<ConditionalLinkProps> & {
  className?: string
}

export function LinkWrapper({ href, children, className, ...props }: LinkWrapperProps) {
  if (!href) {
    return <div className={className}>{children}</div>
  }

  return (
    <Link href={href} {...props} className={className}>
      {children}
    </Link>
  )
}
