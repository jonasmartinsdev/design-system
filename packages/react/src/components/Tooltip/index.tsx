import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { Text } from '../Text'
import { TooltipContainer } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  content: ReactNode
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipContainer>
          <Text size={'sm'} css={{ fontWeight: '$medium' }}>
            {content}
          </Text>
          <TooltipPrimitive.Arrow />
        </TooltipContainer>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
