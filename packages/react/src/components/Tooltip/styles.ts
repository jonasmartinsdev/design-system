import * as Tooltip from '@radix-ui/react-tooltip'

import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Content, {
  borderRadius: '$xs',
  backgroundColor: '$gray900',
  padding: '$3 $4',
})
