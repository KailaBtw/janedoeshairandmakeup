// components/ui/sheet.tsx
import React, { forwardRef } from 'react';
import * as RadixSheet from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

const Sheet = RadixSheet.Root;
const SheetTrigger = RadixSheet.Trigger;
const SheetClose = RadixSheet.Close;
const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-2.5 text-center sm:text-left', className)} {...props} />
);
SheetHeader.displayName = 'SheetHeader';
const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof RadixSheet.Title>,
  React.ComponentPropsWithoutRef<typeof RadixSheet.Title>
>(({ className, ...props }, ref) => (
  <RadixSheet.Title ref={ref} className={cn('text-lg font-semibold tracking-tight', className)} {...props} />
));
SheetTitle.displayName = 'SheetTitle';
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof RadixSheet.Description>,
  React.ComponentPropsWithoutRef<typeof RadixSheet.Description>
>(({ className, ...props }, ref) => (
  <RadixSheet.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
SheetDescription.displayName = 'SheetDescription';

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixSheet.Content> {
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof RadixSheet.Content>,
  SheetContentProps
>(({ className, sideOffset = 0, side = 'right', ...props }, ref) => (
  <RadixSheet.Portal>
    <RadixSheet.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <RadixSheet.Content
      ref={ref}
      className={cn(
        'fixed z-50 bg-background shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-0 data-[state=open]:slide-in-from-bottom-0 sm:data-[state=closed]:slide-out-to-right-0 sm:data-[state=open]:slide-in-from-right-0',
        side === 'top' &&
          'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top-0 data-[state=open]:slide-in-from-top-0',
        side === 'bottom' && 'inset-x-0 bottom-0 border-t',
        side === 'left' &&
          'inset-y-0 left-0 border-r data-[state=closed]:slide-out-to-left-0 data-[state=open]:slide-in-from-left-0 sm:data-[state=closed]:slide-out-to-left-0 sm:data-[state=open]:slide-in-from-left-0',
        side === 'right' && 'inset-y-0 right-0 border-l',
        sideOffset === 0 &&
          (side === 'right' || side === 'left') &&
          'sm:max-w-lg',
        sideOffset > 0 &&
          (side === 'right' || side === 'left') &&
          `max-w-[calc(100vw - ${sideOffset}px)]`,
        className
      )}
      {...props}
    />
  </RadixSheet.Portal>
));
SheetContent.displayName = 'SheetContent';

// Declare SheetProps only once
interface SheetProps extends RadixSheet.DialogProps {
  side?: 'top' | 'bottom' | 'left' | 'right';
}

// Re-export SheetProps using 'export type'
export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  type SheetProps, // Use 'export type' here
};