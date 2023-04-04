import { token } from '@atlaskit/tokens'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

/** Lowest level headings. */
const h100 = () => css`
  font-size: ${token('font.size.050')};
  font-weight: ${token('font.weight.bold')};
  letter-spacing: 0;
  color: ${token('color.text.subtlest')};
  line-height: ${token('font.lineHeight.100')};
  margin-top: ${token('space.200')};
`

/** Low level headings. */
const h200 = css`
  font-size: ${token('font.size.075')};
  font-weight: ${token('font.weight.semibold')};
  letter-spacing: 0;
  color: ${token('color.text.subtlest')};
  line-height: ${token('font.lineHeight.100')};
  margin-top: ${token('space.200')};
`

/** Heading up a group of list items. */
const h300 = css`
  font-size: ${token('font.size.075')};
  font-weight: ${token('font.weight.semibold')};
  letter-spacing: 0;
  color: ${token('color.text')};
  text-transform: uppercase;
  line-height: ${token('font.lineHeight.100')};
  margin-top: ${token('space.250')};
`

/** Deep headings and for highlighting important pieces of information. */
const h400 = (props: { long?: boolean }) => css`
  font-size: ${token('font.size.100')};
  font-weight: ${token('font.weight.semibold')};
  letter-spacing: -0.003em;
  color: ${token('color.text')};
  line-height: ${token(!props.long ? 'font.lineHeight.100' : 'font.lineHeight.200')};
  margin-top: ${token(!props.long ? 'space.200' : 'space.300')};
`

/** Sub-section and field group headings. */
const h500 = (props: { long?: boolean }) => css`
  font-size: ${token('font.size.200')};
  font-weight: ${token('font.weight.semibold')};
  letter-spacing: -0.006em;
  color: ${token('color.text')};
  line-height: ${token(!props.long ? 'font.lineHeight.200' : 'font.lineHeight.300')};
  margin-top: ${token(!props.long ? 'space.300' : 'space.400')};
`

/** Headings that identify key functionality. */
const h600 = (props: { long?: boolean }) => css`
  font-size: ${token('font.size.300')};
  font-weight: ${token('font.weight.medium')};
  letter-spacing: -0.008em;
  color: ${token('color.text')};
  line-height: ${token('font.lineHeight.300')};
  margin-top: ${
    !props.long
      ? `calc(${token('space.250')}+${token('space.100')})`
      : `calc(${token('space.400')}+${token('space.050')})`};
`

/** Main titles, use only once per page. */
const h700 = () => css`
  font-size: ${token('font.size.400')};
  font-weight: ${token('font.weight.medium')};
  letter-spacing: -0.01em;
  color: ${token('color.text')};
  line-height: ${token('font.lineHeight.400')};
  margin-top: ${token('space.500')};
`

/** Empty states and feature introductions. Top level headers. */
const h800 = (props: { long?: boolean }) => css`
  font-size: ${token('font.size.500')};
  font-weight: ${token('font.weight.semibold')};
  letter-spacing: -0.01em;
  color: ${token('color.text')};
  line-height: ${token('font.lineHeight.500')};
  margin-top: ${token(!props.long ? 'space.500' : 'space.600')};
`

/** Oversized screen titles. Use in moderation. */
const h900 = (props: { long?: boolean }) => css`
  font-size: ${token('font.size.600')};
  font-weight: ${token('font.weight.medium')};
  letter-spacing: -0.01em;
  color: ${token('color.text')};
  line-height: ${token('font.lineHeight.600')};
  margin-top: calc(${token('space.600')} + ${token('space.050')});
`

const headingVariants = {
  h100,
  h200,
  h300,
  h400,
  h500,
  h600,
  h700,
  h800,
  h900,
  'screen-title': h900,
  'top-level': h800,
  'empty-state': h800,
  'feature-intro': h800,
  'main-title': h700,
  'key-function': h600,
  'sub-section': h500,
  'field-group': h500,
  important: h400,
  list: h300,
  group: h300,
  'low-level': h200,
  'lowest-level': h100,
}
type HeadingVariantKeys = keyof typeof headingVariants
const Text = styled.span<{
  variant?: HeadingVariantKeys
  long?: boolean
}>`
  ${(props) => headingVariants[props.variant ?? 'h700']}

  span& {
    margin-top: 0;
  }
`

export default Text