import { atom, useAtom } from 'jotai'
import { Link } from 'react-router-dom'

import {
  AtlassianNavigation,
  PrimaryButton,
  ProductHome,
} from '@atlaskit/atlassian-navigation'
import { AtlassianIcon, AtlassianLogo } from '@atlaskit/logo'

const LinkTo = (to: string) => (props: any) => <Link to={to} {...props} />

const AtlassianProductHome = () => (
  <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
)

export const navigationItems = atom([
  <PrimaryButton component={LinkTo('./installed')}>Installed</PrimaryButton>,
  <PrimaryButton component={LinkTo('./download')}>Downloads</PrimaryButton>,
  <PrimaryButton component={LinkTo('./workshop')}>Workshop</PrimaryButton>,
  // <PrimaryButton>Repositories</PrimaryButton>,
])

export default function Navigation() {
  const [items] = useAtom(navigationItems)
  return (
    <AtlassianNavigation
      label="site"
      primaryItems={items ?? []}
      renderProductHome={() => null}
    />
  )
}
