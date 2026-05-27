'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

interface NavLinkCompatProps extends Omit<ComponentPropsWithoutRef<typeof Link>, 'className'> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  /** Mark as active only when the href matches exactly (default: false). */
  end?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName: _pendingClassName, href, end = false, ...props }, ref) => {
    const pathname = usePathname();
    const hrefString = href?.toString() ?? '';
    const isActive = end
      ? pathname === hrefString
      : pathname === hrefString || pathname.startsWith(hrefString + '/');

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = 'NavLink';

export { NavLink };

